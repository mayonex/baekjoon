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
  const visitedDfs = [];
  const visited = [];
  const [N, M, startV] = input[0].split(" ").map((item) => parseInt(item));
  const graph = Array.from({ length: N + 1 }, () => []);
  for (let i = 1; i <= M; i++) {
    const [vertex1, vertex2] = input[i]
      .split(" ")
      .map((item) => parseInt(item));
    if (graph[vertex1].length > 0) {
      graph[vertex1] = [...graph[vertex1], vertex2];
    } else {
      graph[vertex1] = [vertex2];
    }
    if (graph[vertex2].length > 0) {
      graph[vertex2] = [...graph[vertex2], vertex1];
    } else {
      graph[vertex2] = [vertex1];
    }
  }
  const dfs = (startV) => {
    visitedDfs.push(startV);
    const sortedVertexes = graph[startV].sort((a, b) => a - b);
    for (let item of sortedVertexes) {
      if (!visitedDfs.includes(item)) {
        dfs(item);
      }
    }
  };
  dfs(startV);

  const queue = new Queue();
  queue.enqueue(startV);
  visited.push(startV);
  while (queue.size > 0) {
    const curV = queue.dequeue();
    const sortedVertexes = graph[curV].sort((a, b) => a - b);
    for (let vertex of sortedVertexes) {
      if (!visited.includes(vertex)) {
        visited.push(vertex);
        queue.enqueue(vertex);
      }
    }
  }
  console.log(visitedDfs.join(" "));
  console.log(visited.join(" "));
}
const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(file).toString().split("\n");
solution(input);
