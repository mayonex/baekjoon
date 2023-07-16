function solution(input) {
  let answer = "";
  const stack = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "<") {
      while (stack.length > 0) {
        answer += stack.pop();
      }
      while (input[i] != ">") {
        answer += input[i];
        i++;
      }
      answer += input[i];
    } else if (input[i] === " ") {
      while (stack.length > 0) {
        answer += stack.pop();
      }
      answer += input[i];
    } else {
      stack.push(input[i]);
    }
  }
  while (stack.length > 0) {
    answer += stack.pop();
  }
  console.log(answer.replace(/\n/g, ""));
}

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(file).toString();
solution(input);
