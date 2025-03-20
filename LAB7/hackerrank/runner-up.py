n = int(input())  
scores = list(map(int, input().split()))  


max_score = max(scores)


filtered_scores = [score for score in scores if score != max_score]


runner_up = max(filtered_scores)

print(runner_up)
