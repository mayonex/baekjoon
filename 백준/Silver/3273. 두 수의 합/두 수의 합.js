function solution(input) {
  const N = parseInt(input[0]);
  const list = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  const goal = parseInt(input[2]);
  let start = 0;
  let end = N - 1;
  let count = 0;
  while (start < end) {
    const total = list[start] + list[end];
    if (total > goal) end--;
    else if (total < goal) start++;
    else {
      count++;
      end--;
      start++;
    }
  }
  console.log(count);
}

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(file).toString().split("\n");
solution(input);
