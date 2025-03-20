N = int(input())

records = []
for _ in range(N):
    name = input()
    score = float(input())
    records.append([name, score])

grades = sorted(set(score for name, score in records))
second_lowest_grade = grades[1]

students = sorted([name for name, score in records if score == second_lowest_grade])

for student in students:
    print(student)
