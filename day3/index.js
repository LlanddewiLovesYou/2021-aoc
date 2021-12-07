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
      const value = digit === "1" ? "on" : "off";
      if (!counts[i + 1]) {
        counts[i + 1] = { on: 0, off: 0 };
      }
      counts[i + 1][value]++;
    });
  });

  return counts;
};

const determineOxygen = (input) => {
  let oxygen = [...input];
  let filterBit;
  const counts = mostPopularBit(input);
  const positions = Object.keys(counts);
  while (oxygen.length > 1) {
    positions.forEach((position, i) => {
      const bits = counts[position];
      if (bits["on"] > bits["off"]) {
        filterBit = 1;
      } else {
        filterBit = 0;
      }
      oxygen = oxygen.filter((datapoint) => {
        const datapointArray = datapoint.split("");
        console.log({ oxygen });
        return parseInt(datapointArray[position]) === filterBit;
      });
    });
  }

  return oxygen[0];
};
const determineCO2 = () => {
  const co2 = [];
  const counts = mostPopularBit(input);
  const positions = Object.keys(counts);
};

const determineLifeSupportMetrics = (input) => {
  determineOxygen(input);
  // determineCO2();
};

console.log(determineLifeSupportMetrics(testInput));

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
