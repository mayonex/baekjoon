function solution(input) {
  const set = {
    0: 1,
    1: 1,
    2: 1,
    3: 1,
    4: 1,
    5: 1,
    6: 1,
    7: 1,
    8: 1,
    9: 1,
  };
  let count = 1;
  for (let i = 0; i < input.length; i++) {
    if (input[i] == 6) {
      if (set[6] > 0) set[6] -= 1;
      else if (set[9] > 0) set[9] -= 1;
      else if (set[6] == 0 && set[9] == 0) {
        count++;
        for (let j = 0; j < 10; j++) {
          set[j] += 1;
        }
        set[input[i]] = 0;
      }
    } else if (input[i] == 9) {
      if (set[9] > 0) set[9] -= 1;
      else if (set[6] > 0) set[6] -= 1;
      else if (set[6] == 0 && set[9] == 0) {
        count++;
        for (let j = 0; j < 10; j++) {
          set[j] += 1;
        }
        set[input[i]] = 0;
      }
    } else {
      if (set[input[i]] > 0) set[input[i]] -= 1;
      else if (set[input[i]] == 0) {
        count++;
        for (let j = 0; j < 10; j++) {
          set[j] += 1;
        }
        set[input[i]] = 0;
      }
    }
  }
  console.log(count);
}

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(file).toString().trim();
solution(input);
