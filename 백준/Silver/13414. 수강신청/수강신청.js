function solution(input) {
  const [K, L] = input[0].split(" ").map(Number);
  const clicked = [];
  const clicked_set = new Set();
  const answer = [];
  for (let i = 1; i <= L; i++) {
    if (clicked_set.has(input[i])) {
      clicked_set.delete(input[i]);
    }
    clicked_set.add(input[i]);
  }
  let k = 0;
  for (let item of clicked_set) {
    if (k == K) break;
    answer.push(item);
    k++;
  }
  console.log(answer.join("\n"));
}

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
solution(input);
