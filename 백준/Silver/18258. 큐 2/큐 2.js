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
    if (this.size === 0) return -1;
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    this.size--;
    return item;
  };
  empty = () => {
    if (this.size === 0) return 1;
    return 0;
  };
  frontf = () => {
    if (this.size === 0) return -1;
    return this.items[this.front];
  };
  back = () => {
    if (this.size === 0) return -1;
    return this.items[this.rear - 1];
  };
}
function solution(input) {
  const N = parseInt(input[0]);
  const answer = [];
  const queue = new Queue();
  for (let i = 1; i <= N; i++) {
    const [com, value] = input[i].split(" ");
    if (com === "push") queue.enqueue(value);
    else if (com === "front") answer.push(queue.frontf());
    else if (com === "back") answer.push(queue.back());
    else if (com === "pop") answer.push(queue.dequeue());
    else if (com === "empty") answer.push(queue.empty());
    else if (com === "size") answer.push(queue.size);
  }
  console.log(answer.join("\n"));
}

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
solution(input);
