data = []

while True:
    tmp = input()
    if tmp == 'E' or tmp == 'e':
        break

    i = len(tmp)-1
    while tmp[i] != '\t':
        i -= 1
    percentage = tmp[i+1:-1]

    option_str = tmp[:i]

    data.append([option_str, percentage])

data2 = [["상관 없음", 100]]

for i in range(len(data)):

    try:
        if data[i][0][-1] == '%':
            idx = data[i][0].index('+')

            check = True
            for j in range(len(data2)):
                if data[i][0][:idx] in data2[j][0]:
                    check = False
                    break

            if check:
                value = float(data[i][1])
                for tmp_str in data[i+1:]:
                    if tmp_str[0][-1] == '%':
                        if data[i][0][:idx] == tmp_str[0][ :tmp_str[0].index('+')]:
                            value = value + float(tmp_str[1])
                if value != float(data[i][1]): # 동일한 항목이 있었다면 value가 초기값가 달라짐
                    data2.append([data[i][0][:idx] + "+??%", str(value)])

    except ValueError:
        a = 1

for i in range(len(data2)):
    option_str = data2[i][0]
    percentage = data2[i][1]
    print("<option value = {%s}>{\"%s\"}</option>" % (percentage, option_str))

for i in range(len(data)):
    option_str = data[i][0]
    percentage = data[i][1]

    print("<option value = {%s}>{\"%s\"}</option>" % (percentage, option_str))