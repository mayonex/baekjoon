# 1158
import sys
N, K = map(int, sys.stdin.readline().split(" "))
circle = []
answer = []
index = 0
for i in range(1, N + 1):
    circle.append(i)
while(len(circle) > 0):
    index = (index + K - 1) % len(circle)
    answer.append(str(circle.pop(index)))
answer_str = ", ".join(answer)
pre = list(answer_str)
pre.insert(0, '<')
pre.insert(len(pre), '>')
print("".join(pre))
 