class Queue {
  constructor() {
    this.items = {};
    this.front = 0;
    this.rear = 0;
    this.size = 0;
  }
  enqueue(value) {
    this.items[this.rear++] = value;
    this.size++;
  }
  dequeue() {
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    this.size--;
    return item;
  }
}
function solution(input) {
  const [N, M] = input.shift().split(" ").map(Number);
  const graph = input.map((item) => item.split(" "));
  const visited = [];
  for (let i = 0; i < M; i++) {
    const list = [];
    for (let j = 0; j < N; j++) {
      list.push(false);
    }
    visited.push(list);
  }

  function bfs(position, blocks) {
    const queue = new Queue();
    let cnt = 0;
    for (let i = 0; i < position.length; i++) {
      const [x, y, count] = position[i];
      queue.enqueue([x, y, count]);
      visited[x][y] = true;
      cnt++;
    }
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    const days = [-1];
    while (queue.size > 0) {
      const [cur_x, cur_y, day] = queue.dequeue();
      days.push(day);
      for (let i = 0; i < 4; i++) {
        const next_x = cur_x + dx[i];
        const next_y = cur_y + dy[i];
        if (next_x >= 0 && next_x < M && next_y >= 0 && next_y < N) {
          if (!visited[next_x][next_y] && graph[next_x][next_y] == "0") {
            graph[next_x][next_y] = "1";
            cnt++;
            queue.enqueue([next_x, next_y, day + 1]);
            visited[next_x][next_y] = true;
          }
        }
      }
    }
    if (cnt == N * M - blocks) return Math.max(...days);
    return -1;
  }
  const position = [];
  let blocks = 0;
  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (graph[i][j] == "1") {
        position.push([i, j, 0]);
      }
      if (graph[i][j] == -1) blocks++;
    }
  }
  console.log(bfs(position, blocks));
}

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
solution(input);
