number = 200
flag = 0
print("Prime numbers between 1 to 200 are :")
for num in range(2, number + 1):
    i = 2
    for i in range(2, num):
        if(num % i == 0):
            i = num
            break;
    # If the number is prime then print it.
    if(i != num):
        print(num)
