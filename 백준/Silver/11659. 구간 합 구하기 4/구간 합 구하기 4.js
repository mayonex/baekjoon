function solution(input) {
  const [N, M] = input[0].split(" ").map((item) => parseInt(item));
  const nums = input[1].split(" ").map((item) => parseInt(item));
  const prefixSum = [0];
  nums.forEach((item, idx) => {
    prefixSum[idx + 1] = prefixSum[idx] + item;
  });
  const answer = [];
  for (let k = 0; k < M; k++) {
    const [i, j] = input[k + 2].split(" ").map((item) => parseInt(item));
    answer.push(prefixSum[j] - prefixSum[i - 1]);
  }
  console.log(answer.join("\n"));
}

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(file).toString().split("\n");
solution(input);
