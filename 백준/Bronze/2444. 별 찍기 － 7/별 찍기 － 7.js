// 2438
function solution(input) {
  const N = parseInt(input[0]);
  const result = [];
  for (let i = 0; i < N; i++) {
    let answer = "";

    for (let j = N - 1; j > i; j--) {
      answer += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
      answer += "*";
    }
    result.push(answer);
  }
  for (let i = 1; i < N; i++) {
    answer = "";
    for (let j = 0; j < i; j++) {
      answer += " ";
    }
    for (let j = 2 * N - 1; j > 2 * i; j--) {
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
