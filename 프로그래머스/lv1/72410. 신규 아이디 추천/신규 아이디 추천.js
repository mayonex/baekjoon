function solution(new_id) {
  let newId = new_id.toLowerCase();
  const arrId = [...newId];
  
    // 2단계
  for (let i = 0; i < arrId.length; i++) {}
  const Id = arrId.filter((item) => {
    if ("a" <= item && item <= "z") return item;
    else if ("0" <= item && item <= "9") return item;
    else if (item == "-" || item == "_" || item == ".") return item;
  });
    
  // 3단계
  const thirdId = [];
  for (let i = 0; i < Id.length; i++) {
    if (Id[i] == ".") {
      while (Id[i + 1] == ".") {
        i = i + 1;
      }
      thirdId.push(Id[i]);
    } else {
      thirdId.push(Id[i]);
    }
  }
  // 4단계
  if (thirdId[0] == ".") {
    thirdId.shift();
  }
  if (thirdId[thirdId.length - 1] == ".") {
    thirdId.pop();
  }

  // 5단계
  if (thirdId.length == 0) {
    thirdId.push("a");
  }
  // 6단계
  if (thirdId.length >= 16) {
    thirdId.splice(15);
  }
  if (thirdId[thirdId.length - 1] == ".") {
    thirdId.pop();
  } else if (thirdId.length <= 2) {
    while (thirdId.length != 3) {
      thirdId.push(thirdId[thirdId.length - 1]);
    }
  }

  const answer = thirdId;
  return answer.join("");
}