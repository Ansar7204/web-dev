def string_splosion(s):
    return ''.join(s[:i] for i in range(1, len(s) + 1))


print(string_splosion('Code'))  # 'CCoCodCode'
print(string_splosion('abc'))   # 'aababc'
print(string_splosion('ab'))    # 'aab'
