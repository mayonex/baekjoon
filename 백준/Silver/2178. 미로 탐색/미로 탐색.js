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
    delete this.items[this.front];
    this.front++;
    this.size--;
    return item;
  };
}

function solution(input) {
  const [nums, ...graph] = input;
  const [N, M] = nums.split(" ").map((item) => parseInt(item));
  const visited = [];
  for (let i = 0; i < N; i++) {
    const temp = [];
    for (let j = 0; j < M; j++) {
      temp.push(false);
    }
    visited.push(temp);
  }

  const bfs = (i, j) => {
    const queue = new Queue();
    let count = 1;
    queue.enqueue([i, j, count]);
    visited[i][j] = true;
    const di = [-1, 1, 0, 0];
    const dj = [0, 0, -1, 1];
    while (queue.size > 0) {
      let [curI, curJ, count] = queue.dequeue();
      for (let i = 0; i < 4; i++) {
        const nextI = curI + di[i];
        const nextJ = curJ + dj[i];
        if (0 <= nextI && nextI < N && 0 <= nextJ && nextJ < M) {
          if (visited[nextI][nextJ] === false && graph[nextI][nextJ] === "1") {
            if (nextI === N - 1 && nextJ === M - 1) {
              visited[nextI][nextJ] = true;
              return ++count;
            } else {
              visited[nextI][nextJ] = true;
              queue.enqueue([nextI, nextJ, count + 1]);
            }
          }
        }
      }
    }
  };
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (graph[i][j] === "1" && visited[i][j] === false) {
        return bfs(i, j);
      }
    }
  }
}

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(file).toString().split("\n");
console.log(solution(input));
