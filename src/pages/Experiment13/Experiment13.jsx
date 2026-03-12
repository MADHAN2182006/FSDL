import { useNavigate } from "react-router-dom";
import "./Experiment13.css";

function Experiment13(){

const navigate = useNavigate();

return(

<div className="experiment13-container">

<h1 className="experiment13-title">
Experiment 13
</h1>

<p className="experiment13-subtitle">
REST API Development using Express.js
</p>


{/* AIM */}

<div className="experiment13-card">

<h2 className="experiment13-heading">
Aim
</h2>

<p className="experiment13-text">

To develop a RESTful API using Node.js and Express.js that performs CRUD operations using HTTP methods such as GET, POST, PUT, and DELETE.

</p>

</div>


{/* STEP 1 */}

<div className="experiment13-card">

<h2 className="experiment13-heading">
Step 1: Create Project Structure
</h2>

<ol className="experiment13-list">

<li>Create folder named <b>express-rest-api</b></li>

<li>Open folder in Visual Studio Code</li>

<li>Initialize Node.js project using:</li>

<li><b>npm init -y</b></li>

<li>Install Express.js:</li>

<li><b>npm install express</b></li>

<li>Create file <b>server.js</b></li>

</ol>

</div>


{/* STEP 2 */}

<div className="experiment13-card">

<h2 className="experiment13-heading">
Step 2: Import Express and Initialize Server
</h2>

<ul className="experiment13-list">

<li>Open server.js</li>

<li>Import Express module</li>

<li>Create Express application instance</li>

</ul>

</div>


{/* STEP 3 */}

<div className="experiment13-card">

<h2 className="experiment13-heading">
Step 3: Create Middleware
</h2>

<ul className="experiment13-list">

<li>Use express.json() middleware</li>

<li>Handle JSON request bodies</li>

</ul>

</div>


{/* STEP 4 */}

<div className="experiment13-card">

<h2 className="experiment13-heading">
Step 4: Define REST API Routes
</h2>

<ul className="experiment13-list">

<li>GET – Retrieve all records</li>

<li>POST – Add a new record</li>

<li>PUT – Update an existing record</li>

<li>DELETE – Remove a record</li>

</ul>

</div>


{/* STEP 5 */}

<div className="experiment13-card">

<h2 className="experiment13-heading">
Step 5: Start the Server
</h2>

<ul className="experiment13-list">

<li>Set server to listen on a port</li>

<li>Run the server using:</li>

<li><b>node server.js</b></li>

</ul>

</div>


{/* STEP 6 */}

<div className="experiment13-card">

<h2 className="experiment13-heading">
Step 6: Test API
</h2>

<ul className="experiment13-list">

<li>Use Postman or browser</li>

<li>Test API endpoints</li>

<li>Verify JSON responses</li>

</ul>

</div>


{/* PROGRAM */}

<div className="experiment13-card">

<h2 className="experiment13-heading">
Program / Sample Code
</h2>

<pre className="experiment13-code">

{`const express = require("express");
const app = express();

app.use(express.json());

let users = [
{ id: 1, name: "John" },
{ id: 2, name: "Alice" }
];

// GET all users
app.get("/users", (req,res)=>{
res.json(users);
});

// POST new user
app.post("/users", (req,res)=>{

const newUser = {
id: users.length + 1,
name: req.body.name
};

users.push(newUser);
res.status(201).json(newUser);

});

// PUT update user
app.put("/users/:id",(req,res)=>{

const id = parseInt(req.params.id);

const user = users.find(u => u.id === id);

if(!user){
return res.status(404).json({message:"User not found"});
}

user.name = req.body.name;
res.json(user);

});

// DELETE user
app.delete("/users/:id",(req,res)=>{

const id = parseInt(req.params.id);

users = users.filter(u => u.id !== id);

res.json({message:"User deleted successfully"});

});

const PORT = 3000;

app.listen(PORT,()=>{
console.log(\`Server running on http://localhost:\${PORT}\`);
});`}

</pre>

</div>


{/* SAMPLE OUTPUT */}

<div className="experiment13-card">

<h2 className="experiment13-heading">
Sample Output
</h2>

<div className="exp13-output">

<h3>Terminal Output</h3>

<p>Server running on http://localhost:3000</p>

<h3>GET /users</h3>

<p>[ {`{ id:1, name:"John" }`}, {`{ id:2, name:"Alice" }`} ]</p>

<h3>POST /users</h3>

<p>{`{ id:3, name:"David" }`}</p>

<h3>DELETE /users/2</h3>

<p>{`{ message:"User deleted successfully" }`}</p>

</div>

</div>


{/* PRACTICE EXERCISE 1 */}

<div className="experiment13-card">

<h2 className="experiment13-heading">
Practice Exercise 1
</h2>

<ul className="experiment13-list">

<li>Add route to fetch single user by ID</li>

<li>Return error if user not found</li>

</ul>

<pre className="experiment13-code">

{`app.get("/users/:id",(req,res)=>{

const id = parseInt(req.params.id);

const user = users.find(u => u.id === id);

if(!user){
return res.status(404).json({message:"User not found"});
}

res.json(user);

});`}

</pre>

</div>


{/* PRACTICE EXERCISE 2 */}

<div className="experiment13-card">

<h2 className="experiment13-heading">
Practice Exercise 2
</h2>

<ul className="experiment13-list">

<li>Add validation for POST request</li>

<li>Ensure name field is not empty</li>

</ul>

<pre className="experiment13-code">

{`app.post("/users",(req,res)=>{

if(!req.body.name){
return res.status(400).json({message:"Name is required"});
}

});`}

</pre>

</div>


{/* SAMPLE OUTPUT ADVANCED */}

<div className="experiment13-card">

<h2 className="experiment13-heading">
Sample Output (Advanced)
</h2>

<div className="exp13-output">

<p>GET /users → Returns all users</p>

<p>GET /users/1 → Returns single user</p>

<p>POST /users → Adds new user</p>

<p>PUT /users/1 → Updates user</p>

<p>DELETE /users/2 → Deletes user</p>

</div>

</div>


{/* SOURCE CODE */}

<div className="experiment13-card">

<h2 className="experiment13-heading">
Source Code
</h2>

<p className="experiment13-text">

Click the button below to view the project source code.

</p>

<div className="experiment13-source-container">

<a
href="https://github.com/MADHAN2182006/Experiment13"
target="_blank"
rel="noopener noreferrer"
className="experiment13-source-btn"
>

View Source Code

</a>

</div>

</div>


{/* RESULT */}

<div className="experiment13-result">

<h2 className="experiment13-heading">
Result
</h2>

<p className="experiment13-text">

The REST API was successfully developed using Express.js. The API supports CRUD operations through HTTP methods such as GET, POST, PUT, and DELETE.

</p>

</div>


{/* BACK BUTTON */}

<div className="experiment13-back-container">

<button
className="experiment13-back-btn"
onClick={()=>navigate("/")}

>

← Back to Dashboard

</button>

</div>

</div>

);

}

export default Experiment13;