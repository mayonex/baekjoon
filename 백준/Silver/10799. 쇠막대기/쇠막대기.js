function solution(input) {
  // 짝괄호 안의 짝괄호의 개수
  const stack = [];
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "(" && input[i + 1] === ")") {
      count += stack.length;
      i = i + 1;
    } else if (input[i] === "(") {
      stack.push("(");
    } else if (input[i] === ")") {
      count++;
      stack.pop();
    }
  }
  console.log(count);
}

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(file).toString().trim().split("");
solution(input);
