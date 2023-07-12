function solution(s, n) {
  const strList = [...s];
  let answer = "";
  const changeList = strList.forEach((item) => {
    if (item >= "a" && item <= "z") {
      answer += String.fromCharCode(
        ((item.charCodeAt() - "a".charCodeAt() + n) % 26) + "a".charCodeAt()
      );
    } else if (item >= "A" && item <= "Z") {
      answer += String.fromCharCode(
        ((item.charCodeAt() - "A".charCodeAt() + n) % 26) + "A".charCodeAt()
      );
    } else if (item == " ") {
      answer += " ";
    }
  });
  return answer;
}