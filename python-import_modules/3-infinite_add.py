#!/usr/bin/python3
if __name__ == "__main__":
    from sys import argv
num = len(argv) - 1
sum = 0
if num == 0:
    print(sum)
else:
    for i in argv[1:]:
        sum = sum + int(i)

    print(sum)
