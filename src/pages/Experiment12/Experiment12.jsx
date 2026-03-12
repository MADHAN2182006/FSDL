import { useNavigate } from "react-router-dom";
import "./Experiment12.css";

function Experiment12(){

const navigate = useNavigate();

return(

<div className="experiment12-container">

<h1 className="experiment12-title">
Experiment 12
</h1>

<p className="experiment12-subtitle">
File System CRUD Operations using Node.js
</p>


{/* AIM */}

<div className="experiment12-card">

<h2 className="experiment12-heading">
Aim
</h2>

<p className="experiment12-text">

To perform Create, Read, Update, and Delete (CRUD) operations on files using the Node.js File System (fs) module.

</p>

</div>


{/* STEP 1 */}

<div className="experiment12-card">

<h2 className="experiment12-heading">
Step 1: Create Project Structure
</h2>

<ol className="experiment12-list">

<li>Create folder named <b>fs-crud</b></li>

<li>Open folder in Visual Studio Code</li>

<li>Create file <b>fsCrud.js</b></li>

</ol>

</div>


{/* STEP 2 */}

<div className="experiment12-card">

<h2 className="experiment12-heading">
Step 2: Import File System Module
</h2>

<ul className="experiment12-list">

<li>Open fsCrud.js file</li>

<li>Import Node.js built-in fs module</li>

</ul>

</div>


{/* STEP 3 */}

<div className="experiment12-card">

<h2 className="experiment12-heading">
Step 3: Create File
</h2>

<ul className="experiment12-list">

<li>Use fs.writeFile()</li>

<li>Create a file named sample.txt</li>

<li>Add sample content</li>

</ul>

</div>


{/* STEP 4 */}

<div className="experiment12-card">

<h2 className="experiment12-heading">
Step 4: Read File
</h2>

<ul className="experiment12-list">

<li>Use fs.readFile()</li>

<li>Display file content in terminal</li>

</ul>

</div>


{/* STEP 5 */}

<div className="experiment12-card">

<h2 className="experiment12-heading">
Step 5: Update File
</h2>

<ul className="experiment12-list">

<li>Use fs.appendFile()</li>

<li>Add new content to the file</li>

</ul>

</div>


{/* STEP 6 */}

<div className="experiment12-card">

<h2 className="experiment12-heading">
Step 6: Delete File
</h2>

<ul className="experiment12-list">

<li>Use fs.unlink()</li>

<li>Delete sample.txt file</li>

</ul>

</div>


{/* STEP 7 */}

<div className="experiment12-card">

<h2 className="experiment12-heading">
Step 7: Execute and Test
</h2>

<ul className="experiment12-list">

<li>Open terminal</li>

<li>Run command:</li>

<li><b>node fsCrud.js</b></li>

<li>Observe output in terminal</li>

</ul>

</div>


{/* PROGRAM */}

<div className="experiment12-card">

<h2 className="experiment12-heading">
Program / Sample Code
</h2>

<pre className="experiment12-code">

{`const fs = require("fs");

// Create File
fs.writeFile("sample.txt","This is a sample file.\\n",(err)=>{
if(err) throw err;

console.log("File created successfully");

// Read File
fs.readFile("sample.txt","utf8",(err,data)=>{
if(err) throw err;

console.log("\\nFile Content:");
console.log(data);

// Update File
fs.appendFile("sample.txt","This content is appended.\\n",(err)=>{
if(err) throw err;

console.log("File updated successfully");

// Delete File
fs.unlink("sample.txt",(err)=>{
if(err) throw err;

console.log("File deleted successfully");

});

});

});

});`}

</pre>

</div>


{/* SAMPLE OUTPUT */}

<div className="experiment12-card">

<h2 className="experiment12-heading">
Sample Output
</h2>

<div className="exp12-output">

<p>File created successfully.</p>

<p>File Content:</p>

<p>This is a sample file.</p>

<p>File updated successfully.</p>

<p>File deleted successfully.</p>

</div>

</div>


{/* PRACTICE EXERCISE 1 */}

<div className="experiment12-card">

<h2 className="experiment12-heading">
Practice Exercise 1
</h2>

<ul className="experiment12-list">

<li>Read file content line by line</li>

<li>Count total lines in the file</li>

<li>Append timestamped data</li>

</ul>

<pre className="experiment12-code">

{`const fs = require("fs");

fs.readFile("sample.txt","utf8",(err,data)=>{

const lines = data.split("\\n").length;

console.log("Total Lines:",lines);

const timestamp = new Date();

fs.appendFile("sample.txt","Updated at: "+timestamp+"\\n",()=>{

console.log("Timestamp appended");

});

});`}

</pre>

</div>


{/* PRACTICE EXERCISE 2 */}

<div className="experiment12-card">

<h2 className="experiment12-heading">
Practice Exercise 2
</h2>

<ul className="experiment12-list">

<li>Check if file exists before reading</li>

<li>Handle file operation errors</li>

</ul>

<pre className="experiment12-code">

{`const fs = require("fs");

if(fs.existsSync("sample.txt")){

fs.readFile("sample.txt","utf8",(err,data)=>{

if(err){

console.log("Error reading file");

}else{

console.log(data);

}

});

}else{

console.log("File does not exist");

}`}

</pre>

</div>


{/* SAMPLE OUTPUT ADVANCED */}

<div className="experiment12-card">

<h2 className="experiment12-heading">
Sample Output (Advanced)
</h2>

<div className="exp12-output">

<p>File exists ✔</p>

<p>Total Lines: 3</p>

<p>Timestamp appended successfully</p>

<p>File deleted successfully</p>

</div>

</div>


{/* SOURCE CODE */}

<div className="experiment12-card">

<h2 className="experiment12-heading">
Source Code
</h2>

<p className="experiment12-text">

Click the button below to view the project source code on GitHub.

</p>

<div className="experiment12-source-container">

<a
href="https://github.com/MADHAN2182006/Experiment12"
target="_blank"
rel="noopener noreferrer"
className="experiment12-source-btn"
>

View Source Code

</a>

</div>

</div>


{/* RESULT */}

<div className="experiment12-result">

<h2 className="experiment12-heading">
Result
</h2>

<p className="experiment12-text">

The File System CRUD operations were successfully implemented using the Node.js fs module. The program demonstrates creating, reading, updating, and deleting files programmatically.

</p>

</div>


{/* BACK BUTTON */}

<div className="experiment12-back-container">

<button
className="experiment12-back-btn"
onClick={()=>navigate("/")}

>

← Back to Dashboard

</button>

</div>


</div>

);

}

export default Experiment12;