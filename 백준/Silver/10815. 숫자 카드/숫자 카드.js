function solution(input) {
  const N = parseInt(input.shift());
  const N_arr = input
    .shift()
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  const M = parseInt(input.shift());
  const M_arr = input.shift().split(" ").map(Number);
  const answer = [];
  for (let i = 0; i < M; i++) {
    const target = M_arr[i];
    answer.push(binarySearch(target));
  }
  console.log(answer.join(" "));
  function binarySearch(target) {
    let start = 0,
      end = N - 1,
      mid;
    while (start <= end) {
      mid = Math.floor((start + end) / 2);
      if (N_arr[mid] == target) return 1;
      else if (N_arr[mid] > target) end = mid - 1;
      else if (N_arr[mid] < target) start = mid + 1;
    }
    return 0;
  }
}

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
solution(input);
