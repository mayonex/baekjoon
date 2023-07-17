function solution(input) {
  const [N, ...arr] = input.map((item) => parseInt(item));
  const stack = [];
  let sum = 0;
  for (let i = 0; i < N; i++) {
    if (arr[i] === 0) {
      stack.pop();
    } else {
      stack.push(arr[i]);
    }
  }
  while (stack.length > 0) {
    sum += stack.pop();
  }
  console.log(sum);
}

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(file).toString().split("\n");
solution(input);
