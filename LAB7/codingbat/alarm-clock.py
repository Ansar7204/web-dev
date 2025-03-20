def alarm_clock(day, vacation):
    if vacation:
        return "10:00" if 1 <= day <= 5 else "off"
    else:
        return "7:00" if 1 <= day <= 5 else "10:00"


print(alarm_clock(1, False))  # '7:00'
print(alarm_clock(5, False))  # '7:00'
print(alarm_clock(0, False))  # '10:00'
print(alarm_clock(2, True))   # '10:00'
print(alarm_clock(6, True))   # 'off'
