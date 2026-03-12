import { useNavigate } from "react-router-dom";
import "./Experiment10.css";

function Experiment10() {

const navigate = useNavigate();

return (

<div className="experiment10-container">

<h1 className="experiment10-title">
Experiment 10
</h1>

<p className="experiment10-subtitle">
React Signup Form with Validation
</p>


{/* AIM */}

<div className="experiment10-card">

<h2 className="experiment10-heading">
Aim
</h2>

<p className="experiment10-text">

To develop a Signup Form using React functional components with form validation,
ensuring correct user input through controlled components.

</p>

</div>


{/* STEP 1 */}

<div className="experiment10-card">

<h2 className="experiment10-heading">
Step 1: Create React Application
</h2>

<ol className="experiment10-list">

<li>Ensure Node.js is installed.</li>

<li>Open Terminal / Command Prompt.</li>

<li>Create React application using command:</li>

<li><b>npx create-react-app signup-form-app</b></li>

<li>Navigate to project folder:</li>

<li><b>cd signup-form-app</b></li>

<li>Start development server:</li>

<li><b>npm start</b></li>

</ol>

</div>


{/* STEP 2 */}

<div className="experiment10-card">

<h2 className="experiment10-heading">
Step 2: Modify App Component
</h2>

<ul className="experiment10-list">

<li>Open project in Visual Studio Code</li>

<li>Navigate to src/App.js</li>

<li>Remove default React code</li>

<li>Import useState hook</li>

</ul>

</div>


{/* STEP 3 */}

<div className="experiment10-card">

<h2 className="experiment10-heading">
Step 3: Create Signup Form
</h2>

<ul className="experiment10-list">

<li>Create input fields for Name, Email and Password</li>

<li>Use useState() to track form values</li>

<li>Bind inputs using value and onChange</li>

</ul>

</div>


{/* STEP 4 */}

<div className="experiment10-card">

<h2 className="experiment10-heading">
Step 4: Implement Validation
</h2>

<ul className="experiment10-list">

<li>Name should not be empty</li>

<li>Email must contain @ symbol</li>

<li>Password length must be at least 6 characters</li>

<li>Show error messages for invalid inputs</li>

</ul>

</div>


{/* STEP 5 */}

<div className="experiment10-card">

<h2 className="experiment10-heading">
Step 5: Execute and Test
</h2>

<ul className="experiment10-list">

<li>Open application in browser</li>

<li>Enter valid and invalid inputs</li>

<li>Check validation messages</li>

<li>Submit valid form</li>

</ul>

</div>


{/* PROGRAM */}

<div className="experiment10-card">

<h2 className="experiment10-heading">
Program / Sample Code
</h2>

<pre className="experiment10-code">

{`import React, { useState } from "react";

function App(){

const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");
const [errors,setErrors] = useState({});

const validate = () => {

let tempErrors = {};

if(!name) tempErrors.name = "Name is required";

if(!email.includes("@"))
tempErrors.email = "Valid email required";

if(password.length < 6)
tempErrors.password = "Password must be at least 6 characters";

setErrors(tempErrors);

return Object.keys(tempErrors).length === 0;

};

const handleSubmit = (e) => {

e.preventDefault();

if(validate()){
alert("Signup Successful!");
}

};

return(

<div>

<h1>Signup Form</h1>

<form onSubmit={handleSubmit}>

<input type="text" placeholder="Name"/>

<input type="email" placeholder="Email"/>

<input type="password" placeholder="Password"/>

<button>Signup</button>

</form>

</div>

);

}

export default App;`}

</pre>

</div>


{/* SAMPLE OUTPUT */}

<div className="experiment10-card">

<h2 className="experiment10-heading">
Sample Output
</h2>

<div className="exp10-output">

<h2 className="exp10-title">
Signup Form
</h2>

<p className="exp10-subtext">
Create a new account to continue
</p>

{/* NAME */}

<div className="exp10-field">

<input
className="exp10-input"
placeholder="Full Name"
/>

<p className="exp10-error">
Name is required
</p>

</div>

{/* EMAIL */}

<div className="exp10-field">

<input
className="exp10-input"
placeholder="Email Address"
/>

<p className="exp10-error">
Valid email required
</p>

</div>

{/* PASSWORD */}

<div className="exp10-field">

<input
className="exp10-input"
placeholder="Password"
/>

<p className="exp10-hint">
Password must be at least 6 characters
</p>

</div>

{/* CONFIRM PASSWORD */}

<div className="exp10-field">

<input
className="exp10-input"
placeholder="Confirm Password"
/>

<p className="exp10-error">
Passwords do not match
</p>

</div>

{/* TERMS */}

<div className="exp10-checkbox">

<input type="checkbox"/>

<span>
I agree to the Terms & Conditions
</span>

</div>

{/* BUTTON */}

<button className="exp10-btn">

Signup

</button>

{/* LOGIN LINK */}

<p className="exp10-login">

Already have an account?

<a href="#"> Login</a>

</p>

</div>

</div>


{/* PRACTICE EXERCISE 1 */}

<div className="experiment10-card">

<h2 className="experiment10-heading">
Practice Exercise 1
</h2>

<ul className="experiment10-list">

<li>Add Confirm Password validation</li>

<li>Show validation errors only after form submission</li>

</ul>

<pre className="experiment10-code">

{`const [confirmPassword,setConfirmPassword] = useState("");

if(password !== confirmPassword){

tempErrors.confirmPassword = "Passwords do not match";

}

<form>

<input type="password" placeholder="Password"/>

<input type="password" placeholder="Confirm Password"/>

</form>`}

</pre>

</div>


{/* PRACTICE EXERCISE 2 */}

<div className="experiment10-card">

<h2 className="experiment10-heading">
Practice Exercise 2
</h2>

<ul className="experiment10-list">

<li>Display submitted form data below form</li>

<li>Clear error messages dynamically when input becomes valid</li>

</ul>

<pre className="experiment10-code">

{`const [submittedData,setSubmittedData] = useState(null);

setSubmittedData({
name,
email
});

{submittedData && (
<div>

<p>Name: {submittedData.name}</p>

<p>Email: {submittedData.email}</p>

</div>
)}`}

</pre>

</div>


{/* SAMPLE OUTPUT ADVANCED */}

<div className="experiment10-card">

<h2 className="experiment10-heading">
Sample Output (Advanced)
</h2>

<div className="exp10-output">

<h2 className="exp10-title">
Signup Dashboard
</h2>

<p className="exp10-subtext">
Create your account and view submitted details below
</p>

{/* FORM */}

<div className="exp10-form">

<input
className="exp10-input"
placeholder="Full Name"
/>

<p className="exp10-error">
Name is required
</p>

<input
className="exp10-input"
placeholder="Email Address"
/>

<p className="exp10-error">
Enter a valid email address
</p>

<input
className="exp10-input"
placeholder="Password"
/>

<p className="exp10-hint">
Password must contain at least 6 characters
</p>

<input
className="exp10-input"
placeholder="Confirm Password"
/>

<p className="exp10-error">
Passwords do not match
</p>

<div className="exp10-checkbox">

<input type="checkbox"/>

<span>I agree to Terms & Conditions</span>

</div>

<button className="exp10-btn">
Register
</button>

</div>


{/* SUCCESS MESSAGE */}

<div className="exp10-success">

<p>
Signup Successful!
</p>

</div>


{/* SUBMITTED DATA */}

<div className="exp10-result">

<h3>Submitted User Details</h3>

<p><b>Name:</b> John</p>

<p><b>Email:</b> john@gmail.com</p>

<p><b>Password:</b> ******</p>

</div>

</div>

</div>

{/* SOURCE CODE */}

<div className="experiment10-card">

<h2 className="experiment10-heading">
Source Code
</h2>

<p className="experiment10-text">
Click the button below to view the source code on GitHub
</p>

<div className="experiment10-source-container">

<a
href="https://github.com/MADHAN2182006/Experiment10"
target="_blank"
rel="noopener noreferrer"
className="experiment10-source-btn"
>

View Source Code

</a>

</div>

</div>


{/* RESULT */}

<div className="experiment10-result">

<h2 className="experiment10-heading">
Result
</h2>

<p className="experiment10-text">

The React Signup Form was successfully implemented using controlled components
and validation logic. This experiment demonstrates React state management,
form validation, and user input handling.

</p>

</div>


{/* BACK BUTTON */}

<div className="experiment10-back-container">

<button
className="experiment10-back-btn"
onClick={()=>navigate("/")}

>

← Back to Dashboard

</button>

</div>


</div>

);

}

export default Experiment10;