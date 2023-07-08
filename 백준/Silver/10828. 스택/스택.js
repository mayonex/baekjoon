function solution(input) {
  const stack = [];
  const N = input[0];
  const answer = [];
  for (let i = 0; i < N; i++) {
    const orderStr = input[i + 1];
    const order = orderStr.split(" ");
    let result;
    if (order[0] === "push") {
      stack.push(order[1]);
    } else if (order[0] === "pop") {
      if (stack.length === 0) {
        result = -1;
      } else {
        result = Number(stack.pop());
      }
    } else if (order[0] === "size") {
      result = stack.length;
    } else if (order[0] === "empty") {
      if (stack.length === 0) {
        result = 1;
      } else {
        result = 0;
      }
    } else if (order[0] === "top") {
      if (stack.length === 0) {
        result = -1;
      } else {
        result = Number(stack[stack.length - 1]);
      }
    }
    if (result != undefined) answer.push(result);
  }
  console.log(answer.join("\n"));
}

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "basic-1/input.txt";
const input = fs.readFileSync(file).toString().split("\n");
solution(input);
