function solution(input) {
  const [N, ...graph] = input;
  const answer = [];
  const row_len = graph.length;
  const col_len = graph[0].length;
  const visited = Array(row_len)
    .fill()
    .map(() => Array(col_len).fill(false));
  const dr = [-1, 1, 0, 0];
  const dc = [0, 0, -1, 1];
  function bfs(row, col) {
    const queue = [];
    let count = 1;
    queue.push([row, col]);
    visited[row][col] = true;
    while (queue.length > 0) {
      const [cur_r, cur_c] = queue.shift();
      for (let i = 0; i < 4; i++) {
        const next_r = cur_r + dr[i];
        const next_c = cur_c + dc[i];
        if (
          next_r >= 0 &&
          next_r < row_len &&
          next_c >= 0 &&
          next_c < col_len
        ) {
          if (
            graph[next_r][next_c] === "1" &&
            visited[next_r][next_c] === false
          ) {
            visited[next_r][next_c] = true;
            queue.push([next_r, next_c]);
            count++;
          }
        }
      }
    }
    answer.push(count);
  }
  let count_home = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (graph[i][j] === "1" && visited[i][j] === false) {
        bfs(i, j);
        count_home++;
      }
    }
  }
  console.log(count_home);
  console.log(answer.sort((a, b) => a - b).join("\n"));
}

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
solution(input);
