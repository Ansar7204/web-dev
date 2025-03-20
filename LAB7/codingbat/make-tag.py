def make_tags(tag, word):
    return f"<{tag}>{word}</{tag}>"


print(make_tags('i', 'Yay'))     # '<i>Yay</i>'
print(make_tags('i', 'Hello'))   # '<i>Hello</i>'
print(make_tags('cite', 'Yay'))  # '<cite>Yay</cite>'
