class Node {
  constructor(value, next, prev) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.headerNode = new Node("head");
    this.trailerNode = new Node("tail");
    this.headerNode.next = this.trailerNode;
    this.trailerNode.prev = this.headerNode;
    this.cursor = this.trailerNode;
  }
  moveLeft = () => {
    if (this.cursor === this.headerNode.next) return;
    else {
      this.cursor = this.cursor.prev;
    }
  };
  moveRight = () => {
    if (this.cursor === this.trailerNode) return;
    else {
      this.cursor = this.cursor.next;
    }
  };
  deleteLeft = () => {
    if (this.cursor === this.headerNode.next) return;
    else {
      const delNode = this.cursor.prev;
      this.cursor.prev = delNode.prev;
      delNode.prev.next = this.cursor;
      delNode.next = null;
    }
  };
  plus = (value) => {
    const newNode = new Node(value);
    newNode.prev = this.cursor.prev;
    newNode.next = this.cursor;
    this.cursor.prev.next = newNode;
    this.cursor.prev = newNode;
  };

  print = () => {
    const answer = [];
    let curNode = this.headerNode.next;
    while (curNode !== this.trailerNode) {
      answer.push(curNode.value);
      curNode = curNode.next;
    }
    console.log(answer.join(""));
  };
}

function solution(input) {
  const [str, N, ...orders] = input;
  const list = new LinkedList();
  for (let i = 0; i < str.length; i++) {
    list.plus(str[i]);
  }
  for (let i = 0; i < parseInt(N); i++) {
    const [order, char] = orders[i].split(" ");
    if (order === "P") {
      list.plus(char);
    } else if (order === "L") {
      list.moveLeft();
    } else if (order === "B") {
      list.deleteLeft();
    } else if (order === "D") {
      list.moveRight();
    }
  }
  list.print();
}

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(file).toString().split("\n");
solution(input);
