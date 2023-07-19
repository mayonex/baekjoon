function solution(input) {
  const arr = [];
  let answer = [];
  for (let i = 1; i <= 20; i++) {
    arr.push(i);
  }
  for (let i = 0; i < 10; i++) {
    const [a, b] = input[i].split(" ").map((item) => parseInt(item));
    const stack = [];
    for (let j = a - 1; j <= b - 1; j++) {
      stack.push(arr[j]);
    }
    for (let j = a - 1; j <= b - 1; j++) {
      arr[j] = stack.pop();
    }
  }
  console.log(arr.join(" "));
}

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(file).toString().split("\n");
solution(input);
