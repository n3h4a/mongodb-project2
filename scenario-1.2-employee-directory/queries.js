// =============================================================
// Scenario 1.2 - Employee Directory
// Topic      : Query operators, projection, sort, skip, limit
// Database   : hr
// Collection : employees
// Run with   : mongosh < scenario-1.2-employee-directory/queries.js
// =============================================================

// Step 1 - Insert eight employees
use hr
db.employees.insertMany([
  { empId: 1, name: "Anita",  dept: "HR",      salary: 42000, city: "Chennai" },
  { empId: 2, name: "Bala",   dept: "IT",      salary: 65000, city: "Bengaluru" },
  { empId: 3, name: "Charan", dept: "IT",      salary: 58000, city: "Chennai" },
  { empId: 4, name: "Deepa",  dept: "Finance", salary: 50000, city: "Mumbai" },
  { empId: 5, name: "Elan",   dept: "IT",      salary: 72000, city: "Chennai" },
  { empId: 6, name: "Farah",  dept: "HR",      salary: 45000, city: "Delhi" },
  { empId: 7, name: "Gopal",  dept: "Finance", salary: 61000, city: "Chennai" },
  { empId: 8, name: "Hema",   dept: "Sales",   salary: 38000, city: "Hyderabad" }
])

// Step 2 - Employees earning more than 60000 ($gt)
db.employees.find({ salary: { $gt: 60000 } })

// Step 3 - Salary between 45000 and 60000, both inclusive ($gte / $lte)
db.employees.find({ salary: { $gte: 45000, $lte: 60000 } })

// Step 4 - Employees of the IT or Finance department ($in)
db.employees.find({ dept: { $in: ["IT", "Finance"] } })

// Step 5a - Chennai employees earning more than 50000 ($and)
db.employees.find({ $and: [ { city: "Chennai" }, { salary: { $gt: 50000 } } ] })

// Step 5b - Employees who are in HR OR earn more than 70000 ($or)
db.employees.find({ $or: [ { dept: "HR" }, { salary: { $gt: 70000 } } ] })

// Step 6 - Employees who do NOT live in Chennai or Bengaluru ($nin)
db.employees.find({ city: { $nin: ["Chennai", "Bengaluru"] } })

// Step 7 - Names starting with A, B or C ($regex)
db.employees.find({ name: { $regex: /^[ABC]/ } })

// Step 8 - Names & salaries only, highest first, skip 2, take next 3
db.employees.find({}, { _id: 0, name: 1, salary: 1 }).sort({ salary: -1 }).skip(2).limit(3)
