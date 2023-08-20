function solution(input) {
  const N = parseInt(input[0]);
  const tops = input[1].split(" ").map((item) => parseInt(item));
  const stack = [];
  const answer = [];
  for (let i = N - 1; i >= 0; i--) {
    while (stack.length > 0 && stack[stack.length - 1][1] <= tops[i]) {
      const [index, value] = stack.pop();
      answer[index] = i + 1;
    }
    stack.push([i, tops[i]]);
  }
  for (let i = 0; i < N; i++) {
    if (answer[i] === undefined) answer[i] = 0;
  }
  console.log(answer.join(" "));
}

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
solution(input);
