const inputParser = require("../inputParser");

const input = inputParser("./input.txt", "string");
const testInput = [
  "00100",
  "11110",
  "10110",
  "10111",
  "10101",
  "01111",
  "00111",
  "11100",
  "10000",
  "11001",
  "00010",
  "01010",
];

const mostPopularBit = (diagnosticArray) => {
  const counts = {};

  diagnosticArray.forEach((datapoint) => {
    const binaryArray = datapoint.split("");
    binaryArray.forEach((digit, i) => {
      const value = digit === "1" ? "1" : "0";
      if (!counts[i + 1]) {
        counts[i + 1] = { 1: 0, 0: 0 };
      }
      counts[i + 1][value]++;
    });
  });

  return counts;
};

const filterData = (dataArray, position, filterBit) => {
  return dataArray.filter((datapoint) => {
    const digits = datapoint.split("");
    return parseInt(digits[position]) === filterBit;
  });
};

const determineOxygen = (input) => {
  let oxygen = [];

  const counts = mostPopularBit(input);
  const positions = Object.keys(counts);
  positions.forEach((position, i) => {
    const bits = counts[position];
    if (bits["1"] > bits["0"]) {
      oxygen.push("1");
    } else {
      oxygen.push("0");
    }
  });

  return oxygen.join("");
};

const determineCO2 = (input) => {
  let co2 = [];
  const counts = mostPopularBit(input);
  const positions = Object.keys(counts);
  positions.forEach((position, i) => {
    const bits = counts[position];
    console.log({ [position]: bits });
    if (bits["1"] < bits["0"]) {
      co2.push("1");
    } else {
      co2.push("0");
    }
  });

  return co2.join("");
};

const determineLifeSupportMetrics = (input) => {
  // console.log({
  //   included: input.includes(determineOxygen(input)),
  //   binary: determineOxygen(input),
  // });
  console.log({
    included: input.includes(determineCO2(input)),
    binary: determineCO2(input),
  });
  // return parseInt(determineOxygen(input), 2) * parseInt(determineCO2(input), 2);
};

console.log(determineLifeSupportMetrics(input));

// Object.keys(counts).forEach((position) => {
//   const on = counts[position]["on"];
//   const off = counts[position]["off"];
//   if (on > off) {
//     gamma.push("1");
//     epsilon.push("0");
//   } else {
//     gamma.push("0");
//     epsilon.push("1");
//   }
// });

// return parseInt(gamma.join(""), 2) * parseInt(epsilon.join(""), 2);
