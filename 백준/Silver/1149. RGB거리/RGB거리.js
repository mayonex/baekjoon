function solution(input) {
  const N = parseInt(input[0]);
  const dp = [...new Array(N + 1)].map((v) => [0, 0, 0]);
  for (let i = 1; i <= N; i++) {
    const [red, green, blue] = input[i].split(" ").map(Number);
    dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + red;
    dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + green;
    dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + blue;
  }
  console.log(Math.min(...dp[N]));
}

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
solution(input);
