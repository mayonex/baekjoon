function solution(input) {
  function getScore(input) {
    const stack = [];
    let answer = 0;
    for (let i = 0; i < input.length; i++) {
      const ch = input[i];
      if (ch === "(") stack.push(")");
      else if (ch === "[") stack.push("]");
      else if (ch === ")") {
        if (stack.length === 0) return 0;
        else if (stack[stack.length - 1] === ")") {
          stack.pop();
          stack.push(2);
        } else if (typeof stack[stack.length - 1] == "number") {
          let score = 0;
          while (stack.length > 0 && stack[stack.length - 1] !== ")") {
            score += stack.pop();
          }
          if (stack.pop() !== ")") return 0;
          stack.push(score * 2);
        } else {
          return 0;
        }
      } else if (ch === "]") {
        if (stack.length === 0) return 0;
        else if (stack[stack.length - 1] === "]") {
          stack.pop();
          stack.push(3);
        } else if (typeof stack[stack.length - 1] == "number") {
          let score = 0;
          while (stack.length > 0 && stack[stack.length - 1] !== "]") {
            score += stack.pop();
          }
          if (stack.pop() !== "]") return 0;
          stack.push(score * 3);
        } else {
          return 0;
        }
      }
    }
    while (stack.length > 0) {
      const peek = stack[stack.length - 1];
      if (typeof peek == "number") answer += stack.pop();
      else return 0;
    }
    return answer;
  }
  console.log(getScore(input));
}

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(file).toString().trim();
solution(input);
