function solution(input) {
  const [N, ...arr] = input;
  const maxCosts = new Array(parseInt(N)).fill(0);
  for (let i = 0; i < parseInt(N); i++) {
    const [duration, cost] = arr[i].split(" ").map(Number);
    if (duration + i > parseInt(N)) continue;
    maxCosts[i] = maxCosts[i] + cost;
    for (let j = i + duration; j < parseInt(N); j++) {
      maxCosts[j] = Math.max(maxCosts[j], maxCosts[i]);
    }
  }
  console.log(Math.max(...maxCosts));
}

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
solution(input);
