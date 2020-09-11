try :
  file = open("testing.txt","r")
  file.write("Hello Guys")
  file.close()
  print("Successful")
except Exception as e:
  print(e)
finally:
  print("Code executed even after error")
