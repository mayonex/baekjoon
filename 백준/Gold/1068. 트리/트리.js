function solution(input) {
  input.shift();
  const parentInfo = input.shift().split(" ").map(Number);
  const eraseNode = +input.shift();

  const tree = [];
  let cnt = 0;
  let rootNode;

  parentInfo.forEach((parentNode, idx) => {
    if (parentNode == -1) {
      rootNode = idx;
      return;
    }
    if (!tree[parentNode]) tree[parentNode] = [];
    tree[parentNode].push(idx);
  });

  const dfs = (node) => {
    if (rootNode == eraseNode) return 0;
    if (!tree[node]) {
      cnt++;
      return;
    }
    tree[node].forEach((nodeNum) => {
      if (nodeNum === eraseNode) {
        if (tree[node].length === 1) cnt++;
        return;
      }
      dfs(nodeNum);
    });
    return cnt;
  };
  console.log(dfs(rootNode));
}

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
solution(input);
