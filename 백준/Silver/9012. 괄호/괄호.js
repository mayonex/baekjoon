function isValid(arr) {
  const stack = [];
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] === "(") {
      stack.push(")");
    } else if (arr[j] === ")") {
      if (stack.length > 0) {
        stack.pop();
      } else {
        return "NO";
      }
    }
  }
  if (stack.length === 0) {
    return "YES";
  } else if (stack.length > 0) {
    return "NO";
  }
}
function solution(input) {
  const [N, ...arr] = input;
  const result = [];
  for (let i = 0; i < N; i++) {
    result.push(isValid(arr[i]));
  }
  console.log(result.join("\n"));
}

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(file).toString().split("\n");
solution(input);
