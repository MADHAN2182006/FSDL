import { useNavigate } from "react-router-dom";
import "./Experiment15.css";

function Experiment15(){

const navigate = useNavigate();

return(

<div className="experiment15-container">

<h1 className="experiment15-title">
Experiment 15
</h1>

<p className="experiment15-subtitle">
Mini MERN Project Integration (Frontend → Backend → Database)
</p>


{/* AIM */}

<div className="experiment15-card">

<h2 className="experiment15-heading">
Aim
</h2>

<p className="experiment15-text">

To design and implement a Mini MERN (MongoDB, Express, React, Node.js) application integrating frontend, backend, and database layers to perform CRUD operations.

</p>

</div>


{/* PROBLEM STATEMENT */}

<div className="experiment15-card">

<h2 className="experiment15-heading">
Problem Statement
</h2>

<ul className="experiment15-list">

<li>Create a Student Management System</li>

<li>Users can add student details from React frontend</li>

<li>Node.js + Express backend processes requests</li>

<li>MongoDB stores and retrieves student records</li>

</ul>

</div>


{/* SYSTEM ARCHITECTURE */}

<div className="experiment15-card">

<h2 className="experiment15-heading">
System Architecture
</h2>

<pre className="experiment15-code">

{`React Frontend
       |
HTTP Requests (Axios / Fetch)
       |
Express + Node.js Backend (REST API)
       |
Mongoose ODM
       |
MongoDB Database`}

</pre>

</div>


{/* STEP 1 */}

<div className="experiment15-card">

<h2 className="experiment15-heading">
Step 1: Create Backend Application
</h2>

<ul className="experiment15-list">

<li>Create backend folder</li>

<li>Initialize Node.js project</li>

<li>Install dependencies: express, mongoose, cors</li>

</ul>

<pre className="experiment15-code">

{`mkdir mern-backend
cd mern-backend
npm init -y
npm install express mongoose cors`}

</pre>

</div>


{/* STEP 2 */}

<div className="experiment15-card">

<h2 className="experiment15-heading">
Step 2: Backend Server Setup
</h2>

<ul className="experiment15-list">

<li>Create server.js file</li>

<li>Connect MongoDB</li>

<li>Create Student schema</li>

<li>Implement API routes</li>

</ul>

</div>


{/* BACKEND CODE */}

<div className="experiment15-card">

<h2 className="experiment15-heading">
Backend Code – server.js
</h2>

<pre className="experiment15-code">

{`const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/mernDB")
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));

const studentSchema = new mongoose.Schema({
name:String,
department:String,
marks:Number
});

const Student = mongoose.model("Student", studentSchema);

app.post("/students", async(req,res)=>{
const student = new Student(req.body);
await student.save();
res.json(student);
});

app.get("/students", async(req,res)=>{
const students = await Student.find();
res.json(students);
});

const PORT = 5000;

app.listen(PORT,()=>{
console.log(\`Backend running on http://localhost:\${PORT}\`);
});`}

</pre>

</div>


{/* STEP 3 */}

<div className="experiment15-card">

<h2 className="experiment15-heading">
Step 3: Create React Frontend
</h2>

<ul className="experiment15-list">

<li>Create React application</li>

<li>Install Axios for API calls</li>

<li>Create UI for student input</li>

</ul>

<pre className="experiment15-code">

{`npx create-react-app mern-frontend
cd mern-frontend
npm install axios
npm start`}

</pre>

</div>


{/* FRONTEND CODE */}

<div className="experiment15-card">

<h2 className="experiment15-heading">
Frontend Code – src/App.js
</h2>

<pre className="experiment15-code">

{`import React,{useState,useEffect} from "react";
import axios from "axios";

function App(){

const [students,setStudents] = useState([]);

const [name,setName] = useState("");
const [dept,setDept] = useState("");
const [marks,setMarks] = useState("");

useEffect(()=>{

axios.get("http://localhost:5000/students")
.then(res=>setStudents(res.data));

},[]);

const addStudent = ()=>{

axios.post("http://localhost:5000/students",{

name,
department:dept,
marks

}).then(res=>{

setStudents([...students,res.data]);
setName("");
setDept("");
setMarks("");

});

};

return(

<div>

<h1>Student Management System</h1>

<input placeholder="Name" />

<input placeholder="Department" />

<input placeholder="Marks" />

<button>Add Student</button>

<ul>

{students.map(s=>(
<li key={s._id}>
{s.name} - {s.department} - {s.marks}
</li>
))}

</ul>

</div>

);

}

export default App;`}

</pre>

</div>


{/* SAMPLE OUTPUT */}

<div className="experiment15-card">

<h2 className="experiment15-heading">
Sample Output
</h2>

<div className="exp15-output">

<h2 className="exp15-title">
Student Management System
</h2>

{/* INPUT SECTION */}

<div className="exp15-form">

<input
className="exp15-input"
placeholder="Enter Student Name"
/>

<input
className="exp15-input"
placeholder="Enter Department"
/>

<input
className="exp15-input"
placeholder="Enter Marks"
/>

<button className="exp15-add-btn">
Add Student
</button>

</div>


{/* STUDENT LIST */}

<h3 className="exp15-list-title">
Student Records
</h3>

<div className="exp15-student-list">

<div className="exp15-student-card">

<p><b>Name:</b> Arun</p>

<p><b>Department:</b> IT</p>

<p><b>Marks:</b> 88</p>

<button className="exp15-delete">
Delete
</button>

</div>


<div className="exp15-student-card">

<p><b>Name:</b> Divya</p>

<p><b>Department:</b> CSE</p>

<p><b>Marks:</b> 91</p>

<button className="exp15-delete">
Delete
</button>

</div>

</div>


{/* BACKEND STATUS */}

<div className="exp15-backend">

<h3>Backend Console</h3>

<p>MongoDB Connected</p>

<p>Backend running on http://localhost:5000</p>

<p>New student added successfully ✔</p>

</div>

</div>

</div>

{/* PRACTICE EXERCISE 1 */}

<div className="experiment15-card">

<h2 className="experiment15-heading">
Practice Exercise 1
</h2>

<ul className="experiment15-list">

<li>Add DELETE student functionality</li>

<li>Add Update student marks API</li>

</ul>

<pre className="experiment15-code">
{`// DELETE Student API (Backend)

app.delete("/students/:id", async (req, res) => {

const id = req.params.id;

await Student.findByIdAndDelete(id);

res.json({ message: "Student deleted successfully" });

});


// UPDATE Student Marks API

app.put("/students/:id", async (req, res) => {

const id = req.params.id;

const updatedStudent = await Student.findByIdAndUpdate(

id,
req.body,
{ new: true }

);

res.json(updatedStudent);

});


// React Frontend Delete Function

const deleteStudent = (id) => {

axios.delete(\`http://localhost:5000/students/\${id}\`)
.then(() => {

setStudents(students.filter(s => s._id !== id));

});

};`}
</pre>

</div>


{/* PRACTICE EXERCISE 2 */}

<div className="experiment15-card">

<h2 className="experiment15-heading">
Practice Exercise 2
</h2>

<ul className="experiment15-list">

<li>Add validation for student marks</li>

<li>Display student count on frontend</li>

</ul>

<pre className="experiment15-code">
{`// Validate marks before adding student

const addStudent = () => {

if(marks < 0 || marks > 100){

alert("Marks must be between 0 and 100");

return;

}

axios.post("http://localhost:5000/students", {

name,
department: dept,
marks

}).then(res => {

setStudents([...students, res.data]);

});

};


// Display total students

<h3>Total Students: {students.length}</h3>


// Student List Rendering

<ul>

{students.map(student => (

<li key={student._id}>

{student.name} - {student.department} - {student.marks}

<button onClick={() => deleteStudent(student._id)}>

Delete

</button>

</li>

))}

</ul>`}
</pre>

</div>


{/* SAMPLE OUTPUT ADVANCED */}

<div className="experiment15-card">

<h2 className="experiment15-heading">
Sample Output (Advanced)
</h2>

<div className="exp15-output">

<h2 className="exp15-title">
Student Management Dashboard
</h2>

{/* STUDENT COUNT */}

<div className="exp15-count">

<h3>Total Students: 2</h3>

</div>


{/* ADD STUDENT FORM */}

<div className="exp15-form">

<input
className="exp15-input"
placeholder="Student Name"
/>

<input
className="exp15-input"
placeholder="Department"
/>

<input
className="exp15-input"
placeholder="Marks"
/>

<button className="exp15-add-btn">
Add Student
</button>

</div>


{/* SUCCESS MESSAGE */}

<p className="exp15-success">

Student added successfully ✔

</p>


{/* STUDENT LIST */}

<div className="exp15-students">

<div className="exp15-student-card">

<h4>Arun</h4>

<p>Department: IT</p>

<p>Marks: 88</p>

<button className="exp15-delete">
Delete
</button>

</div>


<div className="exp15-student-card">

<h4>Divya</h4>

<p>Department: CSE</p>

<p>Marks: 91</p>

<button className="exp15-delete">
Delete
</button>

</div>

</div>


{/* BACKEND STATUS */}

<div className="exp15-backend-status">

<h4>Backend Status</h4>

<p>MongoDB Connected</p>

<p>Server running on http://localhost:5000</p>

<p>API Request Successful</p>

</div>

</div>

</div>


{/* SOURCE CODE */}

<div className="experiment15-card">

<h2 className="experiment15-heading">
Source Code
</h2>

<p className="experiment15-text">
Click below to view the project source code.
</p>

<div className="experiment15-source-container">

<a
href="https://github.com/MADHAN2182006/Experiment15"
target="_blank"
rel="noopener noreferrer"
className="experiment15-source-btn"
>

View Source Code

</a>

</div>

</div>


{/* RESULT */}

<div className="experiment15-result">

<h2 className="experiment15-heading">
Result
</h2>

<p className="experiment15-text">

The Mini MERN Project was successfully implemented by integrating React frontend, Express backend, and MongoDB database. The application demonstrates full-stack communication, API integration, and real-time data storage.

</p>

</div>


{/* BACK BUTTON */}

<div className="experiment15-back-container">

<button
className="experiment15-back-btn"
onClick={()=>navigate("/")}

>

← Back to Dashboard

</button>

</div>

</div>

);

}

export default Experiment15;