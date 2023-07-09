// 1158 요세푸스 순열
function solution(input) {
  N = input[0];
  K = input[1];
  const people = [];
  const answer = [];
  let index = 0;
  for (let i = 1; i <= N; i++) {
    people.push(i);
  }
  while (people.length > 0) {
    index = (K - 1 + index) % people.length;
    answer.push(...people.splice(index, 1));
  }
  console.log(`<${answer.join(", ")}>`);
}

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(file).toString().split(" ");
solution(input);
