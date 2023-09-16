function solution(input) {
  const result = [];
  const N = parseInt(input[0]);
  const arr_N = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  const M = parseInt(input[2]);
  const arr_M = input[3].split(" ").map(Number);
  const set = new Set(arr_N);
  for (let i = 0; i < M; i++) {
    if (set.has(arr_M[i])) result.push(1);
    else result.push(0);
  }
  console.log(result.join("\n"));
}

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
solution(input);
