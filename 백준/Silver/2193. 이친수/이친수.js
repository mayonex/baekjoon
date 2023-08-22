function solution(input) {
  const N = parseInt(input);
  const dp = [1, 1, 2];
  for (let i = 3; i < N; i++) {
    dp[i] = BigInt(dp[i - 1]) + BigInt(dp[i - 2]);
  }
  console.log(String(dp[N - 1]));
}

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(file).toString().split(" ");
solution(input);
