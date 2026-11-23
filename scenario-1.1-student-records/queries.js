// =============================================================
// Scenario 1.1 - Student Records
// Topic      : Basic CRUD operations
// Database   : college
// Collection : students
// Run with   : mongosh < scenario-1.1-student-records/queries.js
// =============================================================

// Step 1 - Create the database `college` and insert ONE student
use college
db.students.insertOne({ rollNo: 101, name: "Arun", dept: "CSE", marks: 78, city: "Chennai" })

// Step 2 - Insert FOUR more students in a single command
db.students.insertMany([
  { rollNo: 102, name: "Priya",   dept: "ECE",  marks: 85, city: "Madurai" },
  { rollNo: 103, name: "Karthik", dept: "CSE",  marks: 62, city: "Chennai" },
  { rollNo: 104, name: "Divya",   dept: "MECH", marks: 70, city: "Coimbatore" },
  { rollNo: 105, name: "Suresh",  dept: "CSE",  marks: 91, city: "Trichy" }
])

// Step 3 - Display all students, then only the CSE students
db.students.find()

db.students.find({ dept: "CSE" })

// Step 4 - Correct the marks of roll number 103 to 68
db.students.updateOne({ rollNo: 103 }, { $set: { marks: 68 } })

// Step 5 - Add a field `semester` with value 3 to every CSE student
db.students.updateMany({ dept: "CSE" }, { $set: { semester: 3 } })

// Step 6 - Delete roll number 104 (the student has left the college)
db.students.deleteOne({ rollNo: 104 })

// Step 7 - Display the total number of students that remain
db.students.countDocuments()
