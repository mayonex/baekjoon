// 코테 문제 1

// function isVaild(s) {
//   const stack = [];
//   for (i of s) {
//     if (i == "(") {
//       stack.push(")");
//     } else if (i == "{") {
//       stack.push("}");
//     } else if (i == "[") {
//       stack.push("]");
//     } else if (i != stack.pop()) {
//       return false;
//     }
//   }
//   if (stack.length) {
//     return false;
//   }
//   return true;
// }
// 코테 문제 2
function solution(temperatures) {
  const answer = new Array(temperatures.length).fill(0);
  const stack = [];
  let prevDay, prevTemp;
  let curDay, curTemp;
  for (let i = 0; i < temperatures.length; i++) {
    curDay = i;
    curTemp = temperatures[i];
    while (stack.length && curTemp < stack[stack.length - 1][1]) {
      [prevDay, prevTemp] = stack.pop();
      answer[prevDay] = curDay - prevDay;
    }
    stack.push([curDay, curTemp]);
  }
  return answer;
}
