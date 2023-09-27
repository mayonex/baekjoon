function solution(input) {
  const [N, ...arr] = input;
  const tower = [];
  const result = [];
  for (let i = 0; i < parseInt(N); i++) {
    const floor = parseInt(arr[i]);
    while (tower.length > 0 && tower[tower.length - 1][0] <= floor) {
      const [top, count] = tower.pop();
      result.push(i - count - 1);
    }
    tower.push([floor, i]);
  }
  while (tower.length > 0) {
    const [top, count] = tower.pop();
    result.push(N - 1 - count);
  }
  let sum = 0;
  for (let i = 0; i < result.length; i++) {
    sum += result[i];
  }
  console.log(sum);
}

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
solution(input);
