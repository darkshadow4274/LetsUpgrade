'''
this is the test file in which we are going to check out the py file with the help of unittest
'''
import unittest

def primetest(num):
    '''
    This is the main function which check out the given number is even or odd.
    '''
    if num > 1:
        for i in range(2, num):
            if (num % i) == 0:
                break
            return print("It is a Prime Number")
    return print("It is not a Prime Number")

class testPrimeNumber(unittest.TestCase):
    def testprime(self):
        n = 6
        result = primetest(n)
        self.assertEquals(result,5)
    
if __name__ == "__main__":
    unittest.main()
