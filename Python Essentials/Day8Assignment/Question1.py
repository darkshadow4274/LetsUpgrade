def getInput(argu_func):
  def wrap_func():
    lim = int(input("Enter the limit: "))
    argu_func(lim)
  return wrap_func

@getInput
def fibonacci(n):
    a = 0
    b = 1
    if n <= 0:
        print("Incorrect input")
    elif n == 1:
        print(b)
    else:
        for i in range(1,n+1):
          print(b, end = " ")
          c = a + b
          a = b
          b = c
fibonacci() 
