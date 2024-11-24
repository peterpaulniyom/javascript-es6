let studentProfile = {
  name: "John",
  age: 20,
  scores: {
    thai: 40,
  },
  hobbies: ["Football", "Coding"],
};

let additionalHobbies = ["Painting", "Yoga"];

// Start coding here
let newStudentProfile ={...studentProfile}
newStudentProfile['hobbies'] =[...newStudentProfile['hobbies'], ...additionalHobbies];

console.log(newStudentProfile);
