import { useNavigate } from "react-router-dom";
import "./Experiment11.css";

function Experiment11(){

const navigate = useNavigate();

return(

<div className="experiment11-container">

<h1 className="experiment11-title">
Experiment 11
</h1>

<p className="experiment11-subtitle">
Creating a Node.js Web Server
</p>


{/* AIM */}

<div className="experiment11-card">

<h2 className="experiment11-heading">
Aim
</h2>

<p className="experiment11-text">

To create a basic web server using Node.js that listens for HTTP requests and sends responses to the client.

</p>

</div>


{/* STEP 1 */}

<div className="experiment11-card">

<h2 className="experiment11-heading">
Step 1: Install Node.js
</h2>

<ol className="experiment11-list">

<li>Download Node.js from the official website</li>

<li>Install Node.js on your system</li>

<li>Verify installation using:</li>

<li><b>node -v</b></li>

<li><b>npm -v</b></li>

</ol>

</div>


{/* STEP 2 */}

<div className="experiment11-card">

<h2 className="experiment11-heading">
Step 2: Create Project Structure
</h2>

<ul className="experiment11-list">

<li>Create a folder named <b>node-server</b></li>

<li>Open folder in Visual Studio Code</li>

<li>Create file <b>server.js</b></li>

</ul>

</div>


{/* STEP 3 */}

<div className="experiment11-card">

<h2 className="experiment11-heading">
Step 3: Write Server Code
</h2>

<ul className="experiment11-list">

<li>Import http module</li>

<li>Create HTTP server</li>

<li>Define response message</li>

<li>Listen on a specific port</li>

</ul>

</div>


{/* STEP 4 */}

<div className="experiment11-card">

<h2 className="experiment11-heading">
Step 4: Run the Server
</h2>

<ul className="experiment11-list">

<li>Open terminal in project folder</li>

<li>Run command:</li>

<li><b>node server.js</b></li>

<li>Observe terminal output</li>

</ul>

</div>


{/* STEP 5 */}

<div className="experiment11-card">

<h2 className="experiment11-heading">
Step 5: Test the Server
</h2>

<ul className="experiment11-list">

<li>Open browser</li>

<li>Enter URL:</li>

<li><b>http://localhost:3000</b></li>

<li>Verify server response</li>

</ul>

</div>


{/* PROGRAM */}

<div className="experiment11-card">

<h2 className="experiment11-heading">
Program / Sample Code
</h2>

<pre className="experiment11-code">

{`const http = require("http");

const server = http.createServer((req,res)=>{

res.writeHead(200,{"Content-Type":"text/plain"});

res.end("Hello World! Node.js Server is running.");

});

const PORT = 3000;

server.listen(PORT,()=>{

console.log(\`Server running at http://localhost:\${PORT}\`);

});`}

</pre>

</div>


{/* SAMPLE OUTPUT */}

<div className="experiment11-card">

<h2 className="experiment11-heading">
Sample Output
</h2>

<div className="exp11-output">

<h3>Terminal Output</h3>

<p>Server running at http://localhost:3000</p>

<h3>Browser Output</h3>

<p>Hello World! Node.js Server is running.</p>

</div>

</div>


{/* PRACTICE EXERCISE 1 */}

<div className="experiment11-card">

<h2 className="experiment11-heading">
Practice Exercise 1
</h2>

<ul className="experiment11-list">

<li>Modify server to return HTML response</li>

<li>Create a simple webpage using res.write()</li>

</ul>

<pre className="experiment11-code">

{`res.writeHead(200,{"Content-Type":"text/html"});

res.write("<h1>Node.js Server</h1>");

res.write("<p>Welcome to Node.js Web Server</p>");

res.end();`}

</pre>

</div>


{/* PRACTICE EXERCISE 2 */}

<div className="experiment11-card">

<h2 className="experiment11-heading">
Practice Exercise 2
</h2>

<ul className="experiment11-list">

<li>Create multiple routes</li>

<li>Display different responses for /about and /contact</li>

</ul>

<pre className="experiment11-code">

{`if(req.url === "/about"){
res.end("About Page");
}
else if(req.url === "/contact"){
res.end("Contact Page");
}
else{
res.end("Home Page");
}`}

</pre>

</div>


{/* SAMPLE OUTPUT ADVANCED */}

<div className="experiment11-card">

<h2 className="experiment11-heading">
Sample Output (Advanced)
</h2>

<div className="exp11-output">

<h3>Server Routes</h3>

<p>http://localhost:3000 → Home Page</p>

<p>http://localhost:3000/about → About Page</p>

<p>http://localhost:3000/contact → Contact Page</p>

</div>

</div>


{/* SOURCE CODE */}

<div className="experiment11-card">

<h2 className="experiment11-heading">
Source Code
</h2>

<p className="experiment11-text">

Click the button below to view the project source code.

</p>

<div className="experiment11-source-container">

<a
href="https://github.com/MADHAN2182006/Experiment11"
target="_blank"
rel="noopener noreferrer"
className="experiment11-source-btn"
>

View Source Code

</a>

</div>

</div>


{/* RESULT */}

<div className="experiment11-result">

<h2 className="experiment11-heading">
Result
</h2>

<p className="experiment11-text">

The Node.js Web Server was successfully created and executed. The server listens for HTTP requests and responds with a message, demonstrating the basic working of Node.js server-side programming.

</p>

</div>


{/* BACK BUTTON */}

<div className="experiment11-back-container">

<button
className="experiment11-back-btn"
onClick={()=>navigate("/")}

>

← Back to Dashboard

</button>

</div>

</div>

);

}

export default Experiment11;