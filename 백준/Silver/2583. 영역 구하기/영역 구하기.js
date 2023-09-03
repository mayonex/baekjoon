function solution(input) {
  const [M, N, K] = input[0].split(" ").map(Number);
  let count = 0;
  const answer = [];
  const visited = Array(M)
    .fill()
    .map(() => Array(N).fill(false));
  for (let i = 0; i < K; i++) {
    [start_x, start_y, end_x, end_y] = input[i + 1].split(" ").map(Number);
    for (let j = start_y; j < end_y; j++) {
      for (let k = start_x; k < end_x; k++) {
        if (visited[M - j - 1][k] === false) visited[M - j - 1][k] = true;
      }
    }
  }
  function bfs(row, col) {
    const dr = [-1, 1, 0, 0];
    const dc = [0, 0, -1, 1];
    const queue = [];
    let area = 1;
    visited[row][col] = true;
    queue.push([row, col]);
    while (queue.length > 0) {
      const [cur_r, cur_c] = queue.shift();
      for (let i = 0; i < 4; i++) {
        const next_r = cur_r + dr[i];
        const next_c = cur_c + dc[i];
        if (0 <= next_r && next_r < M && 0 <= next_c && next_c < N) {
          if (visited[next_r][next_c] === false) {
            visited[next_r][next_c] = true;
            queue.push([next_r, next_c]);
            area++;
          }
        }
      }
    }
    answer.push(area);
  }
  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (visited[i][j] === false) {
        bfs(i, j);
        count++;
      }
    }
  }
  console.log(count);
  console.log(answer.sort((a, b) => a - b).join(" "));
}

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
solution(input);
