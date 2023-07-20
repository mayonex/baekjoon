function solution(input) {
  const [N, ...arr] = input;
  let count = 0;
  for (let i = 0; i < parseInt(N); i++) {
    const str = arr[i];
    const stack = [];
    for (let j = 0; j < str.length; j++) {
      if (str[j] === "A") {
        if (stack.length == 0) {
          stack.push(str[j]);
        } else {
          if (stack[stack.length - 1] === "A") {
            stack.pop();
          } else {
            stack.push(str[j]);
          }
        }
      } else if (str[j] === "B") {
        if (stack.length == 0) {
          stack.push(str[j]);
        } else {
          if (stack[stack.length - 1] === "B") {
            stack.pop();
          } else {
            stack.push(str[j]);
          }
        }
      }
    }
    if (stack.length == 0) {
      count++;
    }
  }
  console.log(count);
}

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(file).toString().split("\n");
solution(input);
