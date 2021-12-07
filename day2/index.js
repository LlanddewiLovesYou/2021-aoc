const inputParser = require("../inputParser");

const input = inputParser("./input.txt", "string");
const testInput = input.slice(0, 10);

const getFinalSubPositionProduct = (courseArray) => {
  let horizontal = 0;
  let vertical = 0;
  let aim = 0;

  courseArray.forEach((command, i) => {
    const commandArray = command.split(" ");
    const [direction, distance] = commandArray;
    switch (direction) {
      case "forward":
        horizontal = horizontal + parseInt(distance);
        vertical = vertical + aim * parseInt(distance);
        console.log({ i, direction, distance, horizontal, vertical });
        return;
      case "up":
        aim = aim - parseInt(distance);
        console.log({ i, direction, distance, horizontal, vertical });
        return;
      case "down":
        aim = aim + parseInt(distance);
        console.log({ i, direction, distance, horizontal, vertical });
        return;
    }
    console.log({ i, direction, distance, horizontal, vertical });
  });

  return { horizontal, vertical, product: horizontal * vertical };
};

console.log(getFinalSubPositionProduct(input));
