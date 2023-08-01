function solution(input) {
  const [N, ...arr] = input;
  const memo = {};
  const answer = [];
  for (let i = 0; i < N; i++) {
    answer.push(getHowManyPlus(arr[i]));
  }
  console.log(answer.join("\n"));
  function getHowManyPlus(num) {
    if (num === 1) return 1;
    if (num === 2) return 2;
    if (num === 3) return 4;
    if (!Object.keys(memo).includes(num)) {
      memo[num] =
        getHowManyPlus(num - 1) +
        getHowManyPlus(num - 2) +
        getHowManyPlus(num - 3);
    }
    return memo[num];
  }
}

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs
  .readFileSync(file)
  .toString()
  .split("\n")
  .map((item) => parseInt(item));
solution(input);
