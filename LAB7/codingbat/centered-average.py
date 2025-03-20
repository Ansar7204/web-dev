def centered_average(nums):
    nums.sort()  
    return sum(nums[1:-1]) // (len(nums) - 2)  


print(centered_average([1, 2, 3, 4, 100]))     # 3
print(centered_average([1, 1, 5, 5, 10, 8, 7])) # 5
print(centered_average([-10, -4, -2, -4, -2, 0])) # -3
