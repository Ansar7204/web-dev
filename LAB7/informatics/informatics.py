# Ввод-вывод и оператор присваивания
name = input("Your name: ")  # Ввод данных
age = int(input("Your age: "))  # Преобразование строки в число
print(f"Hello, {name}! Age: {age}")  # Вывод

# Условный оператор
if age >= 18:
    print("You are adult.")
else:
    print("You are underaged.")

# Циклы
# Цикл for - перебор списка
numbers = [1, 2, 3, 4, 5]
print("Nums:")
for num in numbers:
    print(num)

# Цикл while
counter = 5
while counter > 0:
    print(f"Reverse counting: {counter}")
    counter -= 1

# Массивы (списки)
array = ["apple", "banana", "raspberry"]
print("Fruits")
for fruit in array:
    print(fruit)

# Функции
def square(number):
    return number ** 2

print(f"Quadratic 4: {square(4)}")
