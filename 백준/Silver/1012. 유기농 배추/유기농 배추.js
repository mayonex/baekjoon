class Queue {
  constructor() {
    this.items = {};
    this.front = 0;
    this.rear = 0;
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
  const N = parseInt(input[0]);
  const answer = [];
  let count = 0;
  let index = 1;
  let i = 0;
  while (count !== N) {
    const [row, col, M] = input[index].split(" ").map((item) => parseInt(item));
    i = index;
    const graph = [];
    const visited = [];
    for (let j = 0; j < row; j++) {
      const cols = [];
      const visitedCols = [];
      for (let k = 0; k < col; k++) {
        cols.push(0);
        visitedCols.push(false);
      }
      graph.push(cols);
      visited.push(visitedCols);
    }
    for (let j = index + 1; j < index + 1 + M; j++) {
      const [x, y] = input[j].split(" ");
      graph[x][y] = 1;
      i++;
    }
    count++;
    index = i + 1;
    function getBachuLands(x, y) {
      const queue = new Queue();
      queue.enqueue([x, y]);
      visited[x][y] = true;
      const dx = [-1, 1, 0, 0];
      const dy = [0, 0, -1, 1];
      let count = 0;
      while (queue.size > 0) {
        const [curX, curY] = queue.dequeue();
        for (let i = 0; i < 4; i++) {
          const nextX = curX + dx[i];
          const nextY = curY + dy[i];
          if (0 <= nextX && nextX < row && 0 <= nextY && nextY < col) {
            if (visited[nextX][nextY] === false && graph[nextX][nextY] === 1) {
              visited[nextX][nextY] = true;
              queue.enqueue([nextX, nextY]);
              count++;
            }
          }
        }
      }
      return count;
    }
    let lands = 0;
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        if (visited[i][j] === false && graph[i][j] === 1) {
          getBachuLands(i, j);
          lands++;
        }
      }
    }
    answer.push(lands);
  }
  console.log(answer.join("\n"));
}

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(file).toString().split("\n");
solution(input);
