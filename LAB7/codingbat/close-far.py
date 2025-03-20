def close_far(a, b, c):
    def is_close(x, y):
        return abs(x - y) <= 1

    def is_far(x, y):
        return abs(x - y) >= 2

    close_b = is_close(a, b) and is_far(c, a) and is_far(c, b)
    close_c = is_close(a, c) and is_far(b, a) and is_far(b, c)

    return close_b or close_c

print(close_far(1, 2, 10))  # True
print(close_far(1, 2, 3))   # False
print(close_far(4, 1, 3))   # True
