function solution(input) {
  const N = parseInt(input[0]);
  const hash = {};
  for (let i = 1; i <= N; i++) {
    const [name, state] = input[i].split(" ");
    if (state == "enter") {
      hash[name] = "enter";
    } else if (state == "leave") {
      delete hash[name];
    }
  }
  const answer = Object.keys(hash);
  answer.sort();
  console.log(answer.reverse().join("\n"));
}

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
solution(input);
