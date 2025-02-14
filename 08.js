// question 8
// increment salary of 1000 for the employees whose performnce is 9 and above 9

const employees = [
  {
    id: 1,
    name: "John Doe",
    salary: 50000,
    performance: 7,
  },
  {
    id: 2,
    name: "Jane Smith",
    salary: 60000,
    performance: 9,
  },
  {
    id: 3,
    name: "Emily Johnson",
    salary: 55000,
    performance: 8,
  },
  {
    id: 4,
    name: "Michael Brown",
    salary: 70000,
    performance: 8,
  },
  {
    id: 5,
    name: "Sarah Lee",
    salary: 65000,
    performance: 9,
  },
];

const bestEmployees = employees.filter((employee) => employee.performance >= 9);
const hikedEmployees = bestEmployees.map((employee) => {
  employee.salary += 1000; // Increment salary by 1000
  return employee; // Return the updated employee
});

// Log details of each employee with the salary increment
hikedEmployees.forEach((employee) => {
  console.log(`Employee Name: ${employee.name}`);
  console.log(`ID: ${employee.id}`);
  console.log(`Salary: ${employee.salary}`);
  console.log(`Performance: ${employee.performance}`);
  console.log("---------------------------");
});

// chaining method
// const employees = [
//   { id: 1, name: "John Doe", salary: 50000, performance: 7 },
//   { id: 2, name: "Jane Smith", salary: 60000, performance: 9 },
//   { id: 3, name: "Emily Johnson", salary: 55000, performance: 8 },
//   { id: 4, name: "Michael Brown", salary: 70000, performance: 8 },
//   { id: 5, name: "Sarah Lee", salary: 65000, performance: 9 },
// ];

// const hikedEmployees = employees
//   .filter((employee) => employee.performance >= 9) // Filter out employees with performance less than 9
//   .map((employee) => {
//     employee.salary += 1000; // Increment salary by 1000
//     return employee; // Return the updated employee
//   });

// // Log details of each employee with the salary increment
// hikedEmployees.forEach((employee) => {
//   console.log(`Employee Name: ${employee.name}`);
//   console.log(`ID: ${employee.id}`);
//   console.log(`Salary: ${employee.salary}`);
//   console.log(`Performance: ${employee.performance}`);
//   console.log("---------------------------");
// });
