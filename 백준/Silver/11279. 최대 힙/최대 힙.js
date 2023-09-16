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
    // 새로운 노드는 맨 끝에 추가된다.
    let index = this.heap.length - 1;
    let parentIdx = Math.floor((index - 1) / 2);
    while (this.heap[parentIdx] && this.heap[index] > this.heap[parentIdx]) {
      this.swap(index, parentIdx);
      index = parentIdx;
      parentIdx = Math.floor((index - 1) / 2);
    }
  }
  poll() {
    if (this.heap.length === 1) {
      return this.heap.pop();
    }
    const value = this.heap[0];
    // 힙의 마지막 위치에 있는 값을 루트 노드로 이동
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return value;
  }
  bubbleDown() {
    let index = 0;
    let leftIdx = index * 2 + 1;
    let rightIdx = index * 2 + 2;

    while (
      (this.heap[leftIdx] && this.heap[leftIdx] > this.heap[index]) ||
      (this.heap[rightIdx] && this.heap[rightIdx] > this.heap[index])
    ) {
      let smallerIdx = leftIdx;
      if (this.heap[rightIdx] && this.heap[rightIdx] > this.heap[smallerIdx]) {
        smallerIdx = rightIdx;
      }
      this.swap(index, smallerIdx);
      index = smallerIdx;
      leftIdx = index * 2 + 1;
      rightIdx = index * 2 + 2;
    }
  }
}

function solution(input) {
  const N = parseInt(input.shift());
  const heap = new Heap();
  const result = [];
  for (let i = 0; i < N; i++) {
    if (input[i] == 0) {
      if (heap.size() == 0) result.push(0);
      else {
        result.push(heap.poll());
      }
    } else {
      heap.add(parseInt(input[i]));
    }
  }
  console.log(result.join("\n"));
}

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
solution(input);
