const inputParser = require("../inputParser");

const input = inputParser("./input.txt", "number");

const deeperDepth = (depths) => {
  let count = 0;
  let previousDepthWindow;
  let currentDepthWindow;
  depths.forEach((depth, i) => {
    if (depths[i + 1] && depths[i + 2]) {
      currentDepthWindow = depth + depths[i + 1] + depths[i + 2];
      if (currentDepthWindow > previousDepthWindow) {
        count++;
      }
      previousDepthWindow = currentDepthWindow;
    }
  });
  return count;
};

const solution = deeperDepth(input);

console.log(
  `The current depth window was larger than the previous depth window ${solution} times`
);
