// 2587
function solution(input) {
  const answer = [];
  const arr = input.filter((item) => item !== "");
  const numArr = arr.map((item) => parseInt(item));
  const numSum = numArr.reduce((sum, item) => (sum += item), 0);
  const mean = parseInt(numSum / numArr.length);
  const sortArr = numArr.sort((a, b) => a - b);
  const midIndex = parseInt((numArr.length - 1) / 2);
  answer.push(mean);
  answer.push(sortArr[midIndex]);
  console.log(answer.join("\n"));
}

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(file).toString().split("\n");
solution(input);