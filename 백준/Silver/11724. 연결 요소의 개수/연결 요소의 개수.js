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
  const [N, M] = input[0].split(" ").map((item) => parseInt(item));
  const graph = [];
  for (let i = 1; i <= M; i++) {
    const [A, B] = input[i].split(" ").map((item) => parseInt(item));
    if (graph[A] === undefined) {
      graph[A] = [B];
    } else {
      graph[A].push(B);
    }
    if (graph[B] === undefined) {
      graph[B] = [A];
    } else {
      graph[B].push(A);
    }
  }
  const visited = new Set();
  const bfs = (vertex) => {
    const queue = new Queue();
    queue.enqueue(vertex);
    visited.add(vertex);
    while (queue.size > 0) {
      const curV = queue.dequeue();
      if (graph[curV]) {
        for (let item of graph[curV]) {
          if (!visited.has(item)) {
            visited.add(item);
            queue.enqueue(item);
          }
        }
      }
    }
  };
  let count = 0;
  for (let i = 1; i <= N; i++) {
    if (!visited.has(i)) {
      bfs(i);
      count++;
    }
  }
  console.log(count);
}

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(file).toString().split("\n");
solution(input);
