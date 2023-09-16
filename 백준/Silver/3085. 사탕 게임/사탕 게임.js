function solution(input) {
  const N = parseInt(input.shift());
  const graph = [];
  let result = [];
  for (let i = 0; i < N; i++) {
    graph[i] = [];
    for (let j = 0; j < N; j++) {
      graph[i][j] = input[i][j];
    }
  }

  for (let i = 0; i < N - 1; i++) {
    for (let j = 0; j < N; j++) {
      if (graph[i][j] != graph[i + 1][j]) {
        [graph[i][j], graph[i + 1][j]] = [graph[i + 1][j], graph[i][j]];
        result.push(getCountCandy(graph));
        [graph[i][j], graph[i + 1][j]] = [graph[i + 1][j], graph[i][j]];
      }
    }
  }
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N - 1; j++) {
      if (graph[i][j] != graph[i][j + 1]) {
        [graph[i][j], graph[i][j + 1]] = [graph[i][j + 1], graph[i][j]];
        result.push(getCountCandy(graph));
        [graph[i][j], graph[i][j + 1]] = [graph[i][j + 1], graph[i][j]];
      }
    }
  }
  function getCountCandy(graph) {
    let max_col_count = 0,
      max_row_count = 0;
    for (i = 0; i < N; i++) {
      let row_count = 0;
      for (j = 0; j < N - 1; j++) {
        if (graph[j][i] != graph[j + 1][i]) row_count = 0;
        if (graph[j][i] == graph[j + 1][i]) row_count++;
        if (max_row_count < row_count) max_row_count = row_count;
      }
    }
    for (i = 0; i < N; i++) {
      let col_count = 0;
      for (j = 0; j < N - 1; j++) {
        if (graph[i][j] != graph[i][j + 1]) col_count = 0;
        if (graph[i][j] == graph[i][j + 1]) col_count++;
        if (max_col_count < col_count) max_col_count = col_count;
      }
    }
    return max_row_count > max_col_count ? max_row_count : max_col_count;
  }
  if (Math.max(...result) == 0) console.log(0);
  else console.log(Math.max(...result) + 1);
}

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
solution(input);
