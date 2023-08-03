function solution(input) {
  const [str, findStr] = input;
  let stack = [];
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    let isCorrect = 1;
    for (let j = 0; j < findStr.length; j++) {
      if (str[i + j] !== findStr[j]) {
        isCorrect = 0;
      }
    }
    if (isCorrect) {
      count++;
      i = i + findStr.length - 1;
    }
  }
  console.log(count);
}

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(file).toString().split("\n");
solution(input);
