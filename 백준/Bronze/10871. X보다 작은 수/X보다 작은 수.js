// 10871
function solution(input) {
  const [N, X] = input[0].split(" ");
  const [...arr] = input[1].split(" ");
  const intArr = arr.map((item) => parseInt(item));
  const answer = [];
  for (let i = 0; i < parseInt(N); i++) {
    if (intArr[i] < parseInt(X)) {
      answer.push(intArr[i]);
    }
  }
  console.log(answer.join(" "));
}

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(file).toString().split("\n");
solution(input);
