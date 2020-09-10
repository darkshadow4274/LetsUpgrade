def isPrime(n): 
    if n <= 1: 
        return False
    for i in range(2, n): 
        if n % i == 0: 
            return False; 
    return True
lst = list(range(1,2500+1))
lst_prime = filter(isPrime,lst)
print(list(lst_prime))
