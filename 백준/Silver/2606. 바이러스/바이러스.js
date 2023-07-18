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
  const [N, M] = [parseInt(input[0]), parseInt(input[1])];
  const arr = [];
  const graph = {};

  for (let i = 2; i < input.length; i++) {
    arr.push(input[i].split(" ").map(Number));
  }

  for (let i = 0; i < arr.length; i++) {
    const root = arr[i][0];
    const child = arr[i][1];
    if (graph[root]) {
      graph[root] = [...graph[root], child];
    } else {
      graph[root] = [child];
    }
    if (graph[child]) {
      graph[child] = [...graph[child], root];
    } else {
      graph[child] = [root];
    }
  }
  const queue = new Queue();
  const visited = [1];
  queue.enqueue(1);
  while (queue.size > 0) {
    const cur_v = queue.dequeue();
    const graphArr = graph[cur_v] || [];
    for (let i = 0; i < graphArr.length; i++) {
      if (!visited.includes(graphArr[i])) {
        visited.push(graphArr[i]);
        queue.enqueue(graphArr[i]);
      }
    }
  }
  for (let v of visited) {
    const arr = graph[v] || [];
    for (let item of arr) {
      if (!visited.includes(item)) {
        visited.push(item);
      }
    }
  }
  console.log(`${visited.length - 1}`);
}

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(file).toString().split("\n");
solution(input);
