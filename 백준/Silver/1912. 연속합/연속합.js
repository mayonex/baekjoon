function solution(input) {
  const N = parseInt(input.shift());
  const arr = input.shift().split(" ").map(Number);
  const sum = [0];
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] >= 0 && arr[i] + arr[i - 1] >= 0) {
      arr[i] += arr[i - 1];
    }
    max = Math.max(arr[i], max);
  }

  // 0 dp[0]
  // 1 dp[1], dp[0]
  // 2 dp[2], dp[2] - dp[1], dp[2] - dp[0]
  // 3 dp[3], dp[3] - dp[0], dp[3] - dp[1], dp[3] - dp[2]
  console.log(max);
}

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
solution(input);
