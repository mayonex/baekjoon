function solution(input) {
  const answer = [];
  for (let i = 0; i < input.length - 1; i++) {
    const stack = [];
    let isAlreadyNo = 0;
    if (input[i].length === 1) {
      break;
    }
    const str = input[i];
    let j = 0;
    while (str[j] !== ".") {
      if (str[j] === "(") {
        stack.push(")");
      } else if (str[j] === "[") {
        stack.push("]");
      } else if (str[j] == ")" || str[j] == "]") {
        if (stack.pop() !== str[j]) {
          answer.push("no");
          isAlreadyNo = 1;
          break;
        }
      }
      j++;
    }
    if (stack.length > 0 && isAlreadyNo == 0) {
      answer.push("no");
    } else if (stack.length === 0 && isAlreadyNo === 0) {
      answer.push("yes");
    }
  }
  console.log(answer.join("\n"));
}

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(file).toString().split("\n");
solution(input);
