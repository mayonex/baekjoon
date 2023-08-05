function solution(input) {
  const [N, ...arr] = input;
  const stairs = arr.map((item) => parseInt(item));
  const memo = {};
  stairs.unshift(0);
  const getMaxStairs = (N) => {
    if (N <= 0) return 0;
    if (!Object.keys(memo).includes(N.toString())) {
      const twoStepCost = getMaxStairs(N - 2) + stairs[N];
      const oneStepCost = getMaxStairs(N - 3) + stairs[N - 1] + stairs[N];
      memo[N] = oneStepCost > twoStepCost ? oneStepCost : twoStepCost;
    }
    return memo[N];
  };
  const result = getMaxStairs(parseInt(N));
  console.log(result);
}

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(file).toString().split("\n");
solution(input);
