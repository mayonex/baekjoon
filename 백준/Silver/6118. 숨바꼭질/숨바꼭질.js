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
  const answer = [];
  const [N, M] = input[0].split(" ").map((item) => parseInt(item));
  const graph = {};
  for (let i = 1; i <= N; i++) {
    graph[i] = [];
  }
  for (let i = 1; i <= M; i++) {
    const [key, value] = input[i].split(" ").map((item) => parseInt(item));
    graph[key].push(value);
    graph[value].push(key);
  }
  const queue = new Queue();
  const visited = [];
  const counts = [];
  queue.enqueue([1, 0]);
  visited.push(1);
  while (queue.size > 0) {
    let [curV, count] = queue.dequeue();
    counts.push(count);
    for (let item of graph[curV]) {
      if (!visited.includes(item)) {
        queue.enqueue([item, count + 1]);
        visited.push(item);
      }
    }
  }
  const maxLength = Math.max(...counts);
  const maxVertex = [];
  for (let i = 0; i < counts.length; i++) {
    if (counts[i] === maxLength) {
      maxVertex.push(visited[i]);
    }
  }
  const minVertex = Math.min(...maxVertex);
  console.log(minVertex, maxLength, maxVertex.length);
}

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(file).toString().split("\n");
solution(input);
