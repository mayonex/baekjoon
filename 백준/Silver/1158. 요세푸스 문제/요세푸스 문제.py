import sys
N, K = map(int, sys.stdin.readline().split(" "))
circle = [i for i in range(1, N + 1)]
answer = []
index = 0
while(len(circle) > 0):
    index = (index + K - 1) % len(circle)
    answer.append(str(circle.pop(index)))
print("<", ", ".join(answer), ">", sep="")
