class Node {
  constructor(value = 0, leftChild = null, rightChild = null) {
    this.value = value;
    this.leftChild = leftChild;
    this.rightChild = rightChild;
  }
}
class Tree {
  constructor(value) {
    this.root = new Node(value);
  }
}
const findRoot = (root, rootValue) => {
  if (root === null) {
    return null;
  }
  if (root.value == rootValue) {
    return root;
  }
  const left = findRoot(root.leftChild, rootValue);
  const right = findRoot(root.rightChild, rootValue);
  if (left == null) {
    return right;
  }
  if (right == null) {
    return left;
  }
};
let answer = "";
const preOrder = (root) => {
  if (root === null) return;
  answer += root.value;
  preOrder(root.leftChild);
  preOrder(root.rightChild);
};

const midOrder = (root) => {
  if (root === null) return;
  midOrder(root.leftChild);
  answer += root.value;
  midOrder(root.rightChild);
};
const postOrder = (root) => {
  if (root === null) return;
  postOrder(root.leftChild);
  postOrder(root.rightChild);
  answer += root.value;
};
function solution(input) {
  const [N, ...arr] = input;
  const tree = new Tree(arr[0][0]);
  for (let i = 0; i < parseInt(N); i++) {
    const [rootValue, leftChildValue, rightChildValue] = arr[i].split(" ");
    root = findRoot(tree.root, rootValue);
    if (!(leftChildValue === ".")) {
      root.leftChild = new Node(leftChildValue);
    }
    if (!(rightChildValue === ".")) {
      root.rightChild = new Node(rightChildValue);
    }
  }
  preOrder(tree.root);
  answer += "\n";
  midOrder(tree.root);
  answer += "\n";
  postOrder(tree.root);
  console.log(answer);
}

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(file).toString().split("\n");
solution(input);
