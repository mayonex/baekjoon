function solution(input) {
  const stack = [];
  const N = input[0];
  for (let i = 0; i < N; i++) {
    const answer = [];
    const str = [...input[i + 1]];
    str.push(" ");
    for (let j = 0; j < str.length; j++) {
      if (str[j] == " ") {
        while (stack.length > 0) {
          answer.push(stack.pop());
        }
        answer.push(" ");
      } else {
        stack.push(str[j]);
      }
    }
    console.log(answer.join(""));
  }
}

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "basic-1/input.txt";
const input = fs.readFileSync(file).toString().split("\n");
solution(input);
