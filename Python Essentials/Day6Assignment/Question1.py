class bankaccount():
  def __init__(self,ownerName,Balance):
    self.ownerName =ownerName
    self.Balance =Balance
  def deposit(self,depo):
    print("Available Balance of",self.ownerName," is : ",self.Balance)
    self.Balance += depo
    print("Balance now is: ",self.Balance)
  def withdrawl(self,withdrawl):
    print("Available Balance of",self.ownerName," is : ",self.Balance)
    if (self.Balance < withdrawl):
      print("Withdrawl rejected. Low Balance!!!")
    else:
      self.Balance -= withdrawl
      print("Balance now is : ",self.Balance)

obj = bankaccount("Piyush",25000)
obj.deposit(5000)
obj.withdrawl(3200)
obj.deposit(1300)
obj.deposit(1700)
obj.withdrawl(3000)
obj = bankaccount("Nilesh",50000)
obj.deposit(2500)
obj.withdrawl(1500)
obj.deposit(4230)
obj.withdrawl(3000)
