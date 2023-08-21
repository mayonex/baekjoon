function solution(input) {
  const N = parseInt(input);
  const memo = [null, [0, [1]], [1, [2, 1]], [1, [3, 1]]];
  function getMakeOneWay(N) {
    for (let i = 4; i <= N; i++) {
      if (i % 3 === 0 && i % 2 === 0) {
        const thirdWay = memo[i / 3][0] + 1;
        const twiceWay = memo[i / 2][0] + 1;
        if (thirdWay < twiceWay) {
          memo[i] = [thirdWay, [i, ...memo[i / 3][1]]];
        } else {
          memo[i] = [twiceWay, [i, ...memo[i / 2][1]]];
        }
      } else if (i % 3 === 0) {
        const thirdWay = memo[i / 3][0] + 1;
        const oneWay = memo[i - 1][0] + 1;
        if (thirdWay < oneWay) {
          memo[i] = [thirdWay, [i, ...memo[i / 3][1]]];
        } else {
          memo[i] = [oneWay, [i, ...memo[i - 1][1]]];
        }
      } else if (i % 2 === 0) {
        const twiceWay = memo[i / 2][0] + 1;
        const oneWay = memo[i - 1][0] + 1;
        if (twiceWay < oneWay) {
          memo[i] = [twiceWay, [i, ...memo[i / 2][1]]];
        } else {
          memo[i] = [oneWay, [i, ...memo[i - 1][1]]];
        }
      } else {
        memo[i] = [memo[i - 1][0] + 1, [i, ...memo[i - 1][1]]];
      }
    }
    return memo[N];
  }
  const way = getMakeOneWay(N);
  const [path, process] = way;
  console.log(path);
  console.log(process.join(" "));

  //   function getMakeOneProcess(N) {
  //     if (N < 1) return;
  //     console.log(N);
  //     if (N % 3 === 0) getMakeOneProcess(N / 3);
  //     else if (N % 2 === 0) getMakeOneProcess(N / 2);
  //     else getMakeOneProcess(N - 1);
  //     return;
  //   }
  //   getMakeOneProcess(N);
}

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(file).toString().trim();
solution(input);
