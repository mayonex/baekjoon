// 2445
function solution(input) {
  const N = parseInt(input[0]);
  const result = [];
  let answer = "";
  for (let i = 0; i < N; i++) {
    answer = "";
    for (let j = 0; j <= i; j++) {
      answer += "*";
    }
    for (let j = i + 1; j < 2 * N - i - 1; j++) {
      answer += " ";
    }
    for (let j = 2 * N - i - 1; j < 2 * N; j++) {
      answer += "*";
    }
    result.push(answer);
  }
  for (let i = 0; i < N - 1; i++) {
    answer = "";
    for (let j = N - 1; j > i; j--) {
      answer += "*";
    }
    for (let j = 0; j < 2 * (i + 1); j++) {
      answer += " ";
    }
    for (let j = N - 1; j > i; j--) {
      answer += "*";
    }
    result.push(answer);
  }
  console.log(result.join("\n"));
}

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(file).toString().split(" ");
solution(input);
