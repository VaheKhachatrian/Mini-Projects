const employees = [
    {
      id: 1,
      name: "John Doe",
      age: 30,
      department: "Engineering",
      role: { title: "Frontend Developer", level: "Mid" },
      contact: { email: "john.doe@example.com", phone: "123-456-7890" },
      skills: ["JavaScript", "React", "CSS"]
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 28,
      department: "Design",
      role: { title: "UI/UX Designer", level: "Senior" },
      contact: { email: "jane.smith@example.com", phone: "098-765-4321" },
      skills: ["Figma", "Sketch", "Adobe XD"]
    },
  ];

for(let i = 0; i < employees.length; i++) {
    for(let j in employees[i]) {
        if(typeof employees[i][j] === 'object') {
            for(let k in employees[i][j]) {
                console.log(employees[i][j][k]);
            }
        } else {
            console.log(employees[i][j]);
        }
    }
}