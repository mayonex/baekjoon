function solution(input) {
  const N = parseInt(input);
  const question = `어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.`;
  const answer = [];
  answer.push(question);
  recursion(0, N);
  function recursion(repeat, N) {
    const div = [];
    for (let i = 0; i < repeat; i++) {
      div.push("____");
    }
    answer.push(div.join("") + `"재귀함수가 뭔가요?"`);
    if (repeat === N) {
      answer.push(div.join("") + `"재귀함수는 자기 자신을 호출하는 함수라네"`);
      answer.push(div.join("") + "라고 답변하였지.");
      return;
    }
    answer.push(
      div.join("") +
        `"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.`
    );
    answer.push(
      div.join("") +
        `마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.`
    );
    answer.push(
      div.join("") +
        `그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어."`
    );
    repeat += 1;
    recursion(repeat, N);
    answer.push(div.join("") + "라고 답변하였지.");
  }
  console.log(answer.join("\n"));
}

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(file).toString();
solution(input);
