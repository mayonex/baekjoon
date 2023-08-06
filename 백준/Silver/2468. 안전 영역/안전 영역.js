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
  for (let k = 1; k <= 100; k++) {
    const graph = [];
    for (let i = 1; i < input.length; i++) {
      graph.push(
        input[i].split(" ").map((item) => {
          const num = parseInt(item);
          if (num < k) {
            return 0;
          }
          return num;
        })
      );
    }
    const visited = [];
    for (let i = 0; i < N; i++) {
      const visitedRow = [];
      for (let j = 0; j < N; j++) {
        visitedRow.push(false);
      }
      visited.push(visitedRow);
    }
    function findSafeArea(row, col) {
      const queue = new Queue();
      queue.enqueue([row, col]);
      visited[row][col] = true;
      const dR = [-1, 1, 0, 0];
      const dC = [0, 0, -1, 1];
      while (queue.size > 0) {
        const [curR, curC] = queue.dequeue();
        for (let i = 0; i < 4; i++) {
          const nextR = curR + dR[i];
          const nextC = curC + dC[i];
          if (0 <= nextR && nextR < N && 0 <= nextC && nextC < N) {
            if (visited[nextR][nextC] === false && graph[nextR][nextC] !== 0) {
              queue.enqueue([nextR, nextC]);
              visited[nextR][nextC] = true;
            }
          }
        }
      }
    }
    let count = 0;
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        if (graph[i][j] !== 0 && visited[i][j] === false) {
          findSafeArea(i, j);
          count++;
        }
      }
    }
    answer.push(count);
  }
  console.log(Math.max(...answer));
}

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(file).toString().split("\n");
solution(input);
