function solution(input) {
  const N = parseInt(input);
  const memo = { 1: 0, 2: 1, 3: 1 };
  function getMinWay(N) {
    for (let i = 4; i <= N; i++) {
      if (i % 6 === 0) {
        memo[i] = Math.min(1 + memo[i / 3], 1 + memo[i / 2], 1 + memo[i - 1]);
      } else if (i % 3 === 0) {
        memo[i] = Math.min(1 + memo[i / 3], 1 + memo[i - 1]);
      } else if (i % 2 === 0) {
        memo[i] = Math.min(1 + memo[i / 2], 1 + memo[i - 1]);
      } else {
        memo[i] = 1 + memo[i - 1];
      }
    }
    return memo[N];
  }
  console.log(getMinWay(N));
}

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(file).toString().trim();
solution(input);
