import { useNavigate } from "react-router-dom";
import "./Experiment14.css";

function Experiment14(){

const navigate = useNavigate();

return(

<div className="experiment14-container">

<h1 className="experiment14-title">
Experiment 14
</h1>

<p className="experiment14-subtitle">
MongoDB Connection and CRUD Operations using Mongoose
</p>


{/* AIM */}

<div className="experiment14-card">

<h2 className="experiment14-heading">
Aim
</h2>

<p className="experiment14-text">

To connect a Node.js application with MongoDB using Mongoose and perform CRUD operations (Create, Read, Update, Delete) on a database collection.

</p>

</div>


{/* STEP 1 */}

<div className="experiment14-card">

<h2 className="experiment14-heading">
Step 1: Install MongoDB
</h2>

<ol className="experiment14-list">

<li>Install MongoDB Community Server or use MongoDB Atlas.</li>

<li>Ensure MongoDB service is running.</li>

<li>Verify installation using command:</li>

<li><b>mongod</b></li>

</ol>

</div>


{/* STEP 2 */}

<div className="experiment14-card">

<h2 className="experiment14-heading">
Step 2: Create Project Structure
</h2>

<ul className="experiment14-list">

<li>Create folder named <b>mongoose-crud</b></li>

<li>Open folder in Visual Studio Code</li>

<li>Initialize Node project:</li>

<li><b>npm init -y</b></li>

<li>Install required packages:</li>

<li><b>npm install express mongoose</b></li>

<li>Create file <b>server.js</b></li>

</ul>

</div>


{/* STEP 3 */}

<div className="experiment14-card">

<h2 className="experiment14-heading">
Step 3: Connect Node.js with MongoDB
</h2>

<ul className="experiment14-list">

<li>Import mongoose module</li>

<li>Connect to MongoDB using connection string</li>

<li>Handle successful and failed connections</li>

</ul>

</div>


{/* STEP 4 */}

<div className="experiment14-card">

<h2 className="experiment14-heading">
Step 4: Create Schema and Model
</h2>

<ul className="experiment14-list">

<li>Create Student schema</li>

<li>Define fields like name, department, marks</li>

<li>Create model using mongoose.model()</li>

</ul>

</div>


{/* STEP 5 */}

<div className="experiment14-card">

<h2 className="experiment14-heading">
Step 5: Implement CRUD Operations
</h2>

<ul className="experiment14-list">

<li>Create – Insert new student</li>

<li>Read – Fetch student records</li>

<li>Update – Modify existing student</li>

<li>Delete – Remove student record</li>

</ul>

</div>


{/* STEP 6 */}

<div className="experiment14-card">

<h2 className="experiment14-heading">
Step 6: Run and Test
</h2>

<ul className="experiment14-list">

<li>Start the server:</li>

<li><b>node server.js</b></li>

<li>Test APIs using Postman</li>

</ul>

</div>


{/* PROGRAM */}

<div className="experiment14-card">

<h2 className="experiment14-heading">
Program / Sample Code
</h2>

<pre className="experiment14-code">

{`const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/studentDB",{
useNewUrlParser:true,
useUnifiedTopology:true
})
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));

// Schema
const studentSchema = new mongoose.Schema({
name:String,
department:String,
marks:Number
});

// Model
const Student = mongoose.model("Student",studentSchema);

// CREATE
app.post("/students", async (req,res)=>{
const student = new Student(req.body);
await student.save();
res.status(201).json(student);
});

// READ
app.get("/students", async (req,res)=>{
const students = await Student.find();
res.json(students);
});

// UPDATE
app.put("/students/:id", async (req,res)=>{
const updatedStudent = await Student.findByIdAndUpdate(
req.params.id,
req.body,
{ new:true }
);
res.json(updatedStudent);
});

// DELETE
app.delete("/students/:id", async (req,res)=>{
await Student.findByIdAndDelete(req.params.id);
res.json({message:"Student deleted successfully"});
});

// Server
const PORT = 3000;
app.listen(PORT,()=>{
console.log(\`Server running at http://localhost:\${PORT}\`);
});`}

</pre>

</div>


{/* SAMPLE OUTPUT */}

<div className="experiment14-card">

<h2 className="experiment14-heading">
Sample Output
</h2>

<div className="exp14-output">

<h3>Terminal Output</h3>

<p>MongoDB Connected</p>

<p>Server running at http://localhost:3000</p>

<h3>POST /students</h3>

<p>{`{ name:"Arun", department:"IT", marks:85 }`}</p>

<h3>GET /students</h3>

<p>{`[{ name:"Arun", department:"IT", marks:85 }]`}</p>

</div>

</div>


{/* PRACTICE EXERCISE 1 */}

<div className="experiment14-card">

<h2 className="experiment14-heading">
Practice Exercise 1
</h2>

<ul className="experiment14-list">

<li>Add validation for marks (0-100)</li>

<li>Ensure department field is required</li>

</ul>

<pre className="experiment14-code">

{`const studentSchema = new mongoose.Schema({
name:String,
department:{ type:String, required:true },
marks:{ type:Number, min:0, max:100 }
});`}

</pre>

</div>


{/* PRACTICE EXERCISE 2 */}

<div className="experiment14-card">

<h2 className="experiment14-heading">
Practice Exercise 2
</h2>

<ul className="experiment14-list">

<li>Add route to fetch single student by ID</li>

<li>Add error handling if student not found</li>

</ul>

<pre className="experiment14-code">

{`app.get("/students/:id", async (req,res)=>{

const student = await Student.findById(req.params.id);

if(!student){
return res.status(404).json({message:"Student not found"});
}

res.json(student);

});`}

</pre>

</div>


{/* SAMPLE OUTPUT ADVANCED */}

<div className="experiment14-card">

<h2 className="experiment14-heading">
Sample Output (Advanced)
</h2>

<div className="exp14-output">

<p>POST /students → Student created</p>

<p>GET /students → Fetch all students</p>

<p>GET /students/:id → Fetch single student</p>

<p>PUT /students/:id → Update student</p>

<p>DELETE /students/:id → Delete student</p>

</div>

</div>


{/* SOURCE CODE */}

<div className="experiment14-card">

<h2 className="experiment14-heading">
Source Code
</h2>

<p className="experiment14-text">
Click the button below to view the source code on GitHub.
</p>

<div className="experiment14-source-container">

<a
href="https://github.com/MADHAN2182006/Experiment14"
target="_blank"
rel="noopener noreferrer"
className="experiment14-source-btn"
>

View Source Code

</a>

</div>

</div>


{/* RESULT */}

<div className="experiment14-result">

<h2 className="experiment14-heading">
Result
</h2>

<p className="experiment14-text">

The MongoDB connection and CRUD operations were successfully implemented using Mongoose. This demonstrates database connectivity, schema modeling, and server-side data management in a Node.js environment.

</p>

</div>


{/* BACK BUTTON */}

<div className="experiment14-back-container">

<button
className="experiment14-back-btn"
onClick={()=>navigate("/")}

>

← Back to Dashboard

</button>

</div>

</div>

);

}

export default Experiment14;