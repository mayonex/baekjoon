function solution(prices){
    const stack = [];
    const counts = [];
    for(let i = 0; i < prices.length; i++){
        const price = prices[i];
        const sec = i;
        while(stack.length > 0 && stack[stack.length - 1][0] > price){
            const [prevPrice, prevSec] = stack.pop()
            counts[prevSec] = sec - prevSec;
        }
        stack.push([price, sec]);
    }
    while(stack.length > 0){
        const [prevPrice, prevSec] = stack.pop();
        counts[prevSec] = prices.length - 1 - prevSec;
    }
    return counts;
}