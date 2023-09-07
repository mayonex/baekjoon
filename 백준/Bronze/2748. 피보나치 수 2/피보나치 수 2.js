function solution(input) {
  const memo = {};
  function fibonachi(N) {
    if (N == 1 || N == 2) return 1;
    if (!memo.hasOwnProperty(N)) {
      memo[N] = BigInt(fibonachi(N - 1)) + BigInt(fibonachi(N - 2));
    }
    return memo[N];
  }
  const result = fibonachi(parseInt(input));
  console.log(result.toString());
}

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(file).toString().trim();
solution(input);
