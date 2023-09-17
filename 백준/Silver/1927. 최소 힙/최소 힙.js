class Heap {
  constructor() {
    this.heap = [];
  }
  size() {
    return this.heap.length;
  }
  swap(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  }
  add(value) {
    this.heap.push(value);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.heap.length - 1;
    let parentIdx = Math.floor((idx - 1) / 2);
    while (this.heap[idx] && this.heap[idx] < this.heap[parentIdx]) {
      this.swap(idx, parentIdx);
      idx = parentIdx;
      parentIdx = Math.floor((idx - 1) / 2);
    }
  }
  pull() {
    if (this.size() == 0) return 0;
    if (this.size() == 1) return this.heap.pop();
    const value = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return value;
  }
  bubbleDown() {
    let idx = 0;
    let leftIdx = 2 * idx + 1;
    let rightIdx = 2 * idx + 2;
    while (
      (this.heap[leftIdx] && this.heap[leftIdx] < this.heap[idx]) ||
      (this.heap[rightIdx] && this.heap[rightIdx] < this.heap[idx])
    ) {
      let smallIdx = leftIdx;
      if (this.heap[rightIdx] && this.heap[smallIdx] > this.heap[rightIdx])
        smallIdx = rightIdx;
      this.swap(idx, smallIdx);
      idx = smallIdx;
      leftIdx = 2 * idx + 1;
      rightIdx = 2 * idx + 2;
    }
  }
}
function solution(input) {
  const N = parseInt(input[0]);
  const heap = new Heap();
  const result = [];
  for (let i = 1; i <= N; i++) {
    const value = parseInt(input[i]);
    if (value === 0) {
      result.push(heap.pull());
    } else {
      heap.add(value);
    }
  }
  console.log(result.join("\n"));
}

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
solution(input);
