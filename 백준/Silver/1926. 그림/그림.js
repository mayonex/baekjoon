class Queue {
  constructor() {
    this.front = 0;
    this.rear = 0;
    this.items = {};
    this.size = 0;
  }
  enqueue = (value) => {
    this.items[this.rear++] = value;
    this.size++;
  };
  dequeue = () => {
    const item = this.items[this.front];
    delete this.items[this.front++];
    this.size--;
    return item;
  };
}
function solution(input) {
  const info = input[0];
  const [row, col] = info.split(" ").map((item) => parseInt(item));
  const graph = [];
  for (let i = 1; i < input.length; i++) {
    const graphRow = input[i];
    graph.push(graphRow.split(" "));
  }
  const visited = [];
  for (let i = 0; i < row; i++) {
    const visitedRow = [];
    for (let j = 0; j < col; j++) {
      visitedRow.push(false);
    }
    visited.push(visitedRow);
  }
  function getPicturesCounts(i, j) {
    const queue = new Queue();
    queue.enqueue([i, j]);
    visited[i][j] = true;
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    let count = 1;
    while (queue.size > 0) {
      const [curX, curY] = queue.dequeue();
      for (let i = 0; i < 4; i++) {
        const nextX = curX + dx[i];
        const nextY = curY + dy[i];
        if (0 <= nextX && nextX < row && 0 <= nextY && nextY < col) {
          if (visited[nextX][nextY] === false && graph[nextX][nextY] === "1") {
            queue.enqueue([nextX, nextY]);
            visited[nextX][nextY] = true;
            count++;
          }
        }
      }
    }
    return count;
  }
  let count = 0;
  const answer = [0];
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (visited[i][j] === false && graph[i][j] === "1") {
        answer.push(getPicturesCounts(i, j));
        count++;
      }
    }
  }
  console.log(count);
  console.log(Math.max(...answer));
}

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(file).toString().split("\n");
solution(input);
