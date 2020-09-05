alt = int(input("Enter Altitude of the Plane :"))
if alt <= 1000:
  print("Safe to Land. Landing Allowed")
elif alt >1000 and alt <5000:
  print("Bring down to 1000ft")
elif alt >=5000:
  print("Go around try later")
else:
  print("WRONG INPUT!!")
