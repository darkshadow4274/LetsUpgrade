let details = [
    {
      name: "Piyush",
      age: 20,
      country: "India",
      hobbies: ["Singing","Cooking"],
    },
    {
      name: "Nilesh",
      age: 33,
      country: "India",
      hobbies: ["books","dancing"]
    },
    {
        name: "Aditya",
        age: 25,
        country: "Indonesia",
        hobbies: ["bookscricket","dancing"]
      },
  ];
  
for (let i = 0; i < details.length; i++) {
  if (details[i].age <=30) {
      console.log(details[i])
  }
}
for (let i = 0; i < details.length; i++) {
    if (details[i].country =="India") {
        console.log(details[i])
    }
  }