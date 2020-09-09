import math
class cone():
  def __init__(self,r,h):
    self.r =r
    self.h =h
  def volume(self,):
    vol = (3.14*pow(self.r,2)*self.h)/3
    print("Volume of Cone is :",vol)
  def surfacearea(self):
    sa = 3.14*self.r*(math.sqrt(pow(self.r,2) + pow(self.h,2)) + self.r)
    print("Surface Area of Cone is :",sa)

obj = cone(3,4)
obj.volume()
obj.surfacearea()
