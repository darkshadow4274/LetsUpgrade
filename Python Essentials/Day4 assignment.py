low_lim = 1042000
up_lim = 702648265
for i in range(low_lim,up_lim+1,+1):
  n = 0
  summ = 0
  onum = i
  while (onum !=0):
    onum //= 10
    n= n+1
  onum = i
  while (onum !=0):
    r= onum%10
    summ += r**n
    onum //= 10
  if (summ == i):
    print(i,"is Armstrong number.")
    break


