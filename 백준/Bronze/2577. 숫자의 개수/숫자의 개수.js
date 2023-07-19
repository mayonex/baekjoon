// 2577
function solution(input) {
  const [A, B, C] = input.map((item) => parseInt(item));
  const multipy = String(A * B * C);
  const multipyArr = [...multipy];
  const answer = {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
  };
  for (let num of multipyArr) {
    answer[num] = answer[num] + 1;
  }
  console.log(Object.values(answer).join("\n"));
}

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(file).toString().split("\n");
solution(input);
