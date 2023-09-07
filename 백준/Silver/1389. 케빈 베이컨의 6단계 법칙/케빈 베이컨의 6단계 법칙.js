function solution(input) {
  const [N, M] = input[0].split(" ").map(Number);
  const graph = {};
  for (let i = 1; i <= M; i++) {
    const [A, B] = input[i].split(" ").map(Number);
    if (graph[A] === undefined) {
      graph[A] = [B];
    } else {
      if (!graph[A].includes(B)) graph[A].push(B);
    }
    if (graph[B] === undefined) {
      graph[B] = [A];
    } else {
      if (!graph[B].includes(A)) graph[B].push(A);
    }
  }
  const answer = [];
  for (let i = 1; i <= N; i++) {
    const visited = [i];
    const queue = [[i, 0]];
    const counts = [];
    let sum = 0;
    while (queue.length > 0) {
      const [curFriend, count] = queue.shift();
      sum += count;
      for (let item of graph[curFriend]) {
        if (!visited.includes(item)) {
          visited.push(item);
          queue.push([item, count + 1]);
        }
      }
    }
    answer.push(sum);
  }
  const min = Math.min(...answer);
  const index = answer.indexOf(min);
  console.log(index + 1);
}

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
solution(input);
