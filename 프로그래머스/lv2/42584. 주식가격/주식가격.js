function solution(prices) {
  const stack = [];
  const counts = [];
  for (let i = 0; i < prices.length; i++) {
    const curDate = i;
    const curPrice = prices[i];
    while (stack.length && curPrice < stack[stack.length - 1][1]) {
      const [prevDate, prevPrice] = stack.pop();
      counts[prevDate] = curDate - prevDate;
    }
    stack.push([curDate, curPrice]);
    if (curDate === prices.length - 1) {
      while (stack.length) {
        const [prevDate, prevPrice] = stack.pop();
        counts[prevDate] = curDate - prevDate;
      }
    }
  }
  return counts
}
