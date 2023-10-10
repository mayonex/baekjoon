function solution(input) {
  const [N, M] = input.shift().split(" ").map(Number);
  const [K, ...knows] = input.shift().split(" ").map(Number);
  const visited = knows;
  const graph = {};
  let answer = M;
  for (let i = 0; i < M; i++) {
    const [party_n, ...peoples] = input[i].split(" ").map(Number);
    for (let j = 0; j < peoples.length; j++) {
      const people = peoples[j];
      if (!graph[people]) {
        graph[people] = [...peoples];
      }
      graph[people] = [...graph[people], ...peoples];
    }
  }
  for (let i = 0; i < visited.length; i++) {
    bfs(visited[i]);
  }
  function bfs(vertex) {
    const queue = [vertex];
    while (queue.length > 0) {
      const person = queue.shift();
      for (let item of graph[person] || []) {
        if (!visited.includes(item)) {
          visited.push(item);
          queue.push(item);
        }
      }
    }
  }
  for (let i = 0; i < M; i++) {
    const [party_n, ...peoples] = input[i].split(" ").map(Number);
    for (let j = 0; j < peoples.length; j++) {
      const people = peoples[j];
      if (visited.includes(people)) {
        answer--;
        break;
      }
    }
  }
  console.log(answer);
}

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
solution(input);
