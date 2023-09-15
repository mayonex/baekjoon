function solution(input) {
  const N = parseInt(input[0]);
  let i = 1;
  const hash = {};
  while (1) {
    const [user1, user2] = input[i].split(" ");
    if (user1 == "-1" && user2 == "-1") {
      break;
    }
    if (hash[user1]) hash[user1].push(user2);
    else if (hash[user1] === undefined) hash[user1] = [user2];
    if (hash[user2]) hash[user2].push(user1);
    else if (hash[user2] === undefined) hash[user2] = [user1];
    i++;
  }
  function bfs(user) {
    const queue = [[user, 0]];
    const visited = [user];
    const counts = [];
    while (queue.length > 0) {
      const [friend, count] = queue.shift();
      counts.push(count);
      for (item of hash[friend] || []) {
        if (!visited.includes(item)) {
          queue.push([item, count + 1]);
          visited.push(item);
        }
      }
    }
    return Math.max(...counts);
  }
  const users = Object.keys(hash);
  const answer = [];
  for (let i = 0; i < users.length; i++) {
    answer.push(bfs(users[i]));
  }
  const min_score = Math.min(...answer);
  let count = 0;
  const boss = [];
  for (let i = 0; i < answer.length; i++) {
    if (answer[i] == min_score) {
      count++;
      boss.push(i + 1);
    }
  }
  console.log(min_score, count);
  console.log(boss.join(" "));
}

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
solution(input);
