// 2751
function solution(input) {
  const N = input.shift();
  const arr = input.map(Number).sort((a, b) => a - b);
  console.log(arr.join("\n"));
}

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
solution(input);
