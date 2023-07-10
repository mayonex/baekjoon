function solution(input) {
  const stack = [];
  const answer = [];
  const [N, ...arr] = input;
  let count = 0;
  const intArr = arr.map((item) => parseInt(item));
  const sortArr = [...intArr];
  sortArr.sort((a, b) => a - b);

  for (let i = 0; i < N; i++) {
    stack.push(sortArr[i]);
    answer.push("+");
    while (stack.length > 0 && stack[stack.length - 1] == intArr[count]) {
      stack.pop();
      answer.push("-");
      count++;
    }
  }
  if (count == N && stack.length == 0) {
    console.log(answer.join("\n"));
  } else {
    console.log("NO");
  }
}

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(file).toString().split("\n");
solution(input);
