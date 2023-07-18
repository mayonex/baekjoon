class Node {
  constructor(value, next, prev) {
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
  dequeue = () => {
    const item = this.head;
    this.head = this.head.next;
    if (this.head === null) {
      this.tail = null;
    } else {
      this.head.prev = this.tail;
    }
    return item.value;
  };
  enqueue = (value) => {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
      this.tail.next = this.head;
      this.head.prev = this.tail;
    }
    this.size++;
  };
  print = () => {
    let curNode = this.head;
    while (curNode != this.tail) {
      console.log(curNode.value);
      curNode = curNode.next;
    }
    console.log(curNode.value);
  };
  peek = () => {
    return this.head.value;
  };
  popRight = () => {
    const item = this.tail;
    this.tail = this.tail.prev;
    this.tail.next = this.head;
    return item.value;
  };
  pushLeft = (value) => {
    const newNode = new Node(value);
    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.head.prev = this.tail;
  };
}
function solution(input) {
  const [N, M] = input[0].split(" ").map((item) => parseInt(item));
  const arr = input[1].split(" ").map((item) => parseInt(item));
  const deque = new Deque();
  let count = 0;
  for (let i = 1; i <= N; i++) {
    deque.enqueue(i);
  }
  for (let i of arr) {
    let curNode = deque.head;
    let leftCount = 0;
    let rightCount = 0;
    while (curNode.value !== i) {
      curNode = curNode.next;
      leftCount++;
    }
    curNode = deque.head;
    while (curNode.value !== i) {
      curNode = curNode.prev;
      rightCount++;
    }
    if (leftCount < rightCount) {
      while (deque.peek() !== i) {
        deque.enqueue(deque.dequeue());
        count++;
      }
    } else {
      while (deque.peek() !== i) {
        deque.pushLeft(deque.popRight());
        count++;
      }
    }
    deque.dequeue();
  }
  console.log(count);
}

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(file).toString().split("\n");
solution(input);
