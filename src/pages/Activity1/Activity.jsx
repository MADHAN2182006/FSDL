import { useNavigate } from "react-router-dom";
import "./Activity.css";

function Activity(){

const navigate = useNavigate();

return(

<div className="activity-container">

<h1 className="activity-title">
Full Stack Development Activities
</h1>


{/* ================================================= */}
{/* ACTIVITY 1 */}
{/* ================================================= */}

        <div className="steps-container">

      {/* Step 1 */}
      <div className="step-card">
        <h2 className="step-title">Step 1: Install Node.js</h2>

        <ol>
          <li>Download Node.js from the official website</li>
          <li>Install Node.js on your system</li>
          <li>Verify installation using:</li>
          <li className="step-code">node -v</li>
          <li className="step-code">npm -v</li>
        </ol>
      </div>

      {/* Step 2 */}
      <div className="step-card">
        <h2 className="step-title">Step 2: Create Project Structure</h2>

        <ul>
          <li>Create a folder named <b>node-server</b></li>
          <li>Open the folder in Visual Studio Code</li>
          <li>Create a file named <b>server.js</b></li>
        </ul>
      </div>

      {/* Step 3 */}
      <div className="step-card">
        <h2 className="step-title">Step 3: Write Server Code</h2>

        <ul>
          <li>Import the HTTP module</li>
          <li>Create an HTTP server</li>
          <li>Define response message</li>
          <li>Listen on a specific port</li>
        </ul>
      </div>

      {/* Step 4 */}
      <div className="step-card">
        <h2 className="step-title">Step 4: Run the Server</h2>

        <ul>
          <li>Open terminal in the project folder</li>
          <li>Run the following command:</li>
          <li className="step-code">node server.js</li>
          <li>Observe the terminal output</li>
        </ul>
      </div>

      {/* Step 5 */}
      <div className="step-card">
        <h2 className="step-title">Step 5: Test the Server</h2>

        <ul>
          <li>Open your web browser</li>
          <li>Visit the following URL:</li>
          <li className="step-code">http://localhost:3000</li>
          <li>Check the response displayed in the browser</li>
        </ul>
      </div>

    </div>


{/* ================================================= */}
{/* ACTIVITY 2 */}
{/* ================================================= */}

<div className="activity-card">

<h2 className="activity-heading">
Activity 2: React Form Validation with Async Submission
</h2>

<h3>Aim</h3>

<p>
Implement client-side form validation in React and submit data asynchronously.
</p>

<h3>Problem Statement</h3>

<p>
Create a signup form with validation for email and password.
</p>

<h3>Step-by-step procedure</h3>

<ol>
<li>Create form inputs</li>
<li>Use useState for form data</li>
<li>Validate inputs</li>
<li>Submit data asynchronously</li>
</ol>

<h3>Program Code</h3>

<pre className="activity-code">
{`const handleSubmit = async (e)=>{
e.preventDefault();

if(!email.includes("@")){
alert("Invalid email")
return;
}

await axios.post("/api/signup",{email,password})
alert("Signup successful")

}`}
</pre>

<h3>Sample Output</h3>

<div className="activity-output">
Signup Form  
Email: example@gmail.com  
Password: ******  
[Submit]
</div>

<h3>Practice Exercise 1</h3>

<ul>
<li>Add confirm password validation</li>
<li>Add loading spinner</li>
</ul>

<div className="activity-source">
<a href="#" className="activity-source-btn">
View Source Code
</a>
</div>

<h3>Result</h3>

<p>
Client-side validation and async form submission were successfully implemented.
</p>

</div>


{/* ================================================= */}
{/* ACTIVITY 3 */}
{/* ================================================= */}

<div className="activity-card">

<h2 className="activity-heading">
Activity 3: React Data Fetching using useEffect
</h2>

<h3>Aim</h3>

<p>
Fetch data from backend API using useEffect and handle loading and error states.
</p>

<h3>Problem Statement</h3>

<p>
Display product data fetched from backend API.
</p>

<h3>Step-by-step procedure</h3>

<ol>
<li>Create state for products</li>
<li>Use useEffect for API call</li>
<li>Display loading state</li>
<li>Handle errors</li>
</ol>

<h3>Program Code</h3>

<pre className="activity-code">
{`useEffect(()=>{
fetch("/api/products")
.then(res=>res.json())
.then(data=>setProducts(data))
.catch(()=>setError(true))
},[])`}
</pre>

<h3>Sample Output</h3>

<div className="activity-output">
Loading products...  
Product List displayed
</div>

<h3>Practice Exercise 1</h3>

<ul>
<li>Add retry button on error</li>
<li>Add product search filter</li>
</ul>

<div className="activity-source">
<a href="#" className="activity-source-btn">
View Source Code
</a>
</div>

<h3>Result</h3>

<p>
Data fetching and dynamic rendering using useEffect were implemented successfully.
</p>

</div>


{/* ================================================= */}
{/* ACTIVITY 4 */}
{/* ================================================= */}

<div className="activity-card">

<h2 className="activity-heading">
Activity 4: Express REST API with Middleware
</h2>

<h3>Aim</h3>

<p>
Design an Express REST API with route-level middleware.
</p>

<h3>Problem Statement</h3>

<p>
Create an API to manage users with request validation.
</p>

<h3>Step-by-step procedure</h3>

<ol>
<li>Create Express server</li>
<li>Define middleware</li>
<li>Create GET and POST routes</li>
</ol>

<h3>Program Code</h3>

<pre className="activity-code">
{`function validateUser(req,res,next){

if(!req.body.name){
return res.status(400).send("Name required")
}

next()

}

app.post("/users",validateUser,(req,res)=>{
res.send("User added")
})`}
</pre>

<h3>Sample Output</h3>

<div className="activity-output">
POST /users  
User added successfully
</div>

<h3>Practice Exercise 1</h3>

<ul>
<li>Add PUT update route</li>
<li>Add DELETE route</li>
</ul>

<div className="activity-source">
<a href="#" className="activity-source-btn">
View Source Code
</a>
</div>

<h3>Result</h3>

<p>
Express REST API with middleware validation was implemented successfully.
</p>

</div>


{/* ================================================= */}
{/* ACTIVITY 5 */}
{/* ================================================= */}

<div className="activity-card">

<h2 className="activity-heading">
Activity 5: Express Pagination and Filtering
</h2>

<h3>Aim</h3>

<p>
Implement pagination and filtering in Express API.
</p>

<h3>Problem Statement</h3>

<p>
Fetch product list with pagination.
</p>

<h3>Step-by-step procedure</h3>

<ol>
<li>Read query parameters</li>
<li>Implement pagination logic</li>
<li>Return filtered results</li>
</ol>

<h3>Program Code</h3>

<pre className="activity-code">
{`app.get("/products",(req,res)=>{

const page = req.query.page || 1
const limit = req.query.limit || 5

const start = (page-1)*limit

res.json(products.slice(start,start+limit))

})`}
</pre>

<h3>Sample Output</h3>

<div className="activity-output">
GET /products?page=1  
5 products returned
</div>

<h3>Practice Exercise 1</h3>

<ul>
<li>Add category filter</li>
<li>Add sorting by price</li>
</ul>

<div className="activity-source">
<a href="#" className="activity-source-btn">
View Source Code
</a>
</div>

<h3>Result</h3>

<p>
Pagination and filtering logic were implemented successfully.
</p>

</div>


{/* ================================================= */}
{/* ACTIVITY 6 */}
{/* ================================================= */}

<div className="activity-card">

<h2 className="activity-heading">
Activity 6: React + Express Integration
</h2>

<h3>Aim</h3>

<p>
Integrate React frontend with Express backend.
</p>

<h3>Problem Statement</h3>

<p>
Create frontend that consumes backend API.
</p>

<h3>Program Code</h3>

<pre className="activity-code">
{`axios.get("http://localhost:5000/users")
.then(res=>setUsers(res.data))`}
</pre>

<h3>Sample Output</h3>

<div className="activity-output">
Users loaded from backend API
</div>

<h3>Practice Exercise 1</h3>

<ul>
<li>Add error handling</li>
<li>Add loading spinner</li>
</ul>

<div className="activity-source">
<a href="#" className="activity-source-btn">
View Source Code
</a>
</div>

<h3>Result</h3>

<p>
Frontend and backend integration was implemented successfully.
</p>

</div>


{/* ================================================= */}
{/* ACTIVITY 7 */}
{/* ================================================= */}

<div className="activity-card">

<h2 className="activity-heading">
Activity 7: Full Stack Feature Integration
</h2>

<h3>Aim</h3>

<p>
Develop a full-stack feature where React consumes Express API.
</p>

<h3>Program Code</h3>

<pre className="activity-code">
{`app.post("/tasks",(req,res)=>{
tasks.push(req.body)
res.send(tasks)
})`}
</pre>

<h3>Sample Output</h3>

<div className="activity-output">
Task added successfully
</div>

<h3>Practice Exercise 1</h3>

<ul>
<li>Add delete task feature</li>
<li>Add edit task feature</li>
</ul>

<div className="activity-source">
<a href="#" className="activity-source-btn">
View Source Code
</a>
</div>

<h3>Result</h3>

<p>
Full stack interaction between React and Express was implemented.
</p>

</div>


{/* BACK BUTTON */}

<div className="activity-back-container">

<button
className="activity-back-btn"
onClick={()=>navigate("/")}

>

← Back to Dashboard

</button>

</div>

</div>

)

}

export default Activity