function solution(input) {
  const [F, S, G, U, D] = input.map(Number);
  const upDown = [U, -D];
  const visited = new Array(F).fill(false);
  function getMinBtnPush() {
    const queue = [[S, 0]];
    visited[S] = true;
    while (queue.length > 0) {
      const [curFloor, move] = queue.shift();
      if (curFloor == G) return move;
      for (let i = 0; i < 2; i++) {
        const nextFloor = curFloor + upDown[i];
        if (nextFloor > 0 && nextFloor <= F && !visited[nextFloor]) {
          queue.push([nextFloor, move + 1]);
          visited[nextFloor] = true;
        }
      }
    }
    return "use the stairs";
  }
  console.log(getMinBtnPush());
}

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(file).toString().trim().split(" ");
solution(input);
