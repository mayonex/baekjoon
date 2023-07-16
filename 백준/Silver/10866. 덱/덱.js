class Node {
  constructor(value = 0) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
class Deque {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  push_front = (value) => {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++;
  };
  push_back = (value) => {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  };
  pop_front = () => {
    if (this.head === null) return -1;
    const temp = this.head.value;
    this.head = this.head.next;
    if (this.head === null) {
      this.tail = null;
    } else {
      this.head.prev = null;
    }
    this.size--;
    return temp;
  };
  pop_back = () => {
    if (this.head === null) return -1;
    else {
      const temp = this.tail.value;
      this.tail = this.tail.prev;
      if (this.tail === null) {
        this.head = null;
      } else {
        this.tail.next = null;
      }
      this.size--;
      return temp;
    }
  };
  getSize = () => {
    return this.size;
  };
  empty = () => {
    if (this.size === 0) return 1;
    else return 0;
  };
  front = () => {
    if (this.empty()) return -1;
    else return this.head.value;
  };
  back = () => {
    if (this.empty()) return -1;
    else return this.tail.value;
  };
}
function solution(input) {
  const [N, ...arr] = input;
  const answer = [];
  const deque = new Deque();
  for (let i = 0; i < parseInt(N); i++) {
    const [order, value] = arr[i].split(" ");
    if (order === "push_back") {
      deque.push_back(value);
    } else if (order === "push_front") {
      deque.push_front(value);
    } else if (order === "front") {
      answer.push(deque.front());
    } else if (order === "back") {
      answer.push(deque.back());
    } else if (order === "empty") {
      answer.push(deque.empty());
    } else if (order === "size") {
      answer.push(deque.getSize());
    } else if (order === "pop_front") {
      answer.push(deque.pop_front());
    } else if (order === "pop_back") {
      answer.push(deque.pop_back());
    }
  }
  console.log(answer.join("\n"));
}
const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(file).toString().split("\n");
solution(input);
