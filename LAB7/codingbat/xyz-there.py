def xyz_there(s):
    return "xyz" in s.replace(".xyz", "")

print(xyz_there('abcxyz'))   # True
print(xyz_there('abc.xyz'))  # False
print(xyz_there('xyz.abc'))  # True
