def array_front9(nums):
    return 9 in nums[:4]


print(array_front9([1, 2, 9, 3, 4]))  # True
print(array_front9([1, 2, 3, 4, 9]))  # False
print(array_front9([1, 2, 3, 4, 5]))  # False
