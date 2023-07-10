class Node {
  constructor(value = 0, next = null) {
    this.value = value;
    this.next = next;
  }
}
class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }
  push = (value) => {
    const newNode = new Node(value);
    if (this.front === null) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
    this.size++;
  };
  empty = () => {
    if (this.size === 0) {
      return 1;
    }
    return 0;
  };
  pop = () => {
    if (this.empty()) {
      return -1;
    }
    const element = this.front.value;
    this.front = this.front.next;
    if (this.front === null) {
      this.rear = null;
    }
    this.size--;
    return element;
  };
  sizeAction = () => {
    return this.size;
  };

  frontAction = () => {
    if (this.empty()) {
      return -1;
    }
    return this.front.value;
  };
  back = () => {
    if (this.empty()) {
      return -1;
    }
    return this.rear.value;
  };
}
function solution(input) {
  const answer = [];
  const N = parseInt(input[0]);
  const queue = new Queue();
  for (let i = 1; i <= N; i++) {
    const order = input[i].split(" ")[0];
    if (order === "push") {
      const X = parseInt(input[i].split(" ")[1]);
      queue.push(X);
    } else if (order === "pop") {
      answer.push(queue.pop());
    } else if (order === "front") {
      answer.push(queue.frontAction());
    } else if (order === "back") {
      answer.push(queue.back());
    } else if (order === "empty") {
      answer.push(queue.empty());
    } else if (order === "size") {
      answer.push(queue.sizeAction());
    }
  }
  console.log(answer.join("\n"));
}

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(file).toString().split("\n");
solution(input);
