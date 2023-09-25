function solution(input) {
  const [N, K] = input.shift().split(" ").map(Number);
  const arr = input.map(Number).sort((a, b) => b - a);
  let money = K,
    i = 0,
    cnt = 0;
  while (money > 0) {
    if (money == 0) break;
    while (money >= arr[i]) {
      if (money == 0) break;
      money = money - arr[i];
      cnt++;
    }
    i++;
  }
  console.log(cnt);
}

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
solution(input);
