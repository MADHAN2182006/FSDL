import { useNavigate } from "react-router-dom";
import "./Experiment8.css";

function Experiment8(){

const navigate = useNavigate();

return(

<div className="experiment8-container">

<h1 className="experiment8-title">
Experiment 8
</h1>

<p className="experiment8-subtitle">
React Counter Application using useState
</p>


{/* AIM */}

<div className="experiment8-card">

<h2 className="experiment8-heading">
Aim
</h2>

<p className="experiment8-text">

To develop a Counter Application using React functional components
and the useState hook to manage and update component state dynamically.

</p>

</div>


{/* STEP 1 */}

<div className="experiment8-card">

<h2 className="experiment8-heading">
Step 1: Create React Application
</h2>

<ol className="experiment8-list">

<li>Ensure Node.js is installed</li>

<li>Open Command Prompt / Terminal</li>

<li>Run command: <b>npx create-react-app counter-app</b></li>

<li>Navigate to project folder: <b>cd counter-app</b></li>

<li>Start development server: <b>npm start</b></li>

</ol>

</div>


{/* STEP 2 */}

<div className="experiment8-card">

<h2 className="experiment8-heading">
Step 2: Modify App Component
</h2>

<ul className="experiment8-list">

<li>Open project in Visual Studio Code</li>

<li>Navigate to <b>src/App.js</b></li>

<li>Remove unwanted default code</li>

<li>Import <b>useState</b> hook from React</li>

</ul>

</div>


{/* STEP 3 */}

<div className="experiment8-card">

<h2 className="experiment8-heading">
Step 3: Implement Counter Logic
</h2>

<ul className="experiment8-list">

<li>Create state variable <b>count</b> using useState(0)</li>

<li>Create Increment button</li>

<li>Create Decrement button</li>

<li>Create Reset button</li>

<li>Update state using event handlers</li>

</ul>

</div>


{/* STEP 4 */}

<div className="experiment8-card">

<h2 className="experiment8-heading">
Step 4: Style the Application
</h2>

<ul className="experiment8-list">

<li>Edit <b>App.css</b></li>

<li>Center the layout</li>

<li>Style buttons</li>

<li>Improve UI readability</li>

</ul>

</div>


{/* STEP 5 */}

<div className="experiment8-card">

<h2 className="experiment8-heading">
Step 5: Execute and Test
</h2>

<ul className="experiment8-list">

<li>Open the React application in browser</li>

<li>Click Increment button</li>

<li>Click Decrement button</li>

<li>Click Reset button</li>

<li>Verify counter updates instantly</li>

</ul>

</div>


{/* PROGRAM CODE */}

<div className="experiment8-card">

<h2 className="experiment8-heading">
Program / Sample Code
</h2>

<pre className="experiment8-code">
{`import React, { useState } from "react";
import "./App.css";

function App(){

const [count, setCount] = useState(0);

return(

<div className="container">

<h1>React Counter App</h1>

<h2>{count}</h2>

<button onClick={()=>setCount(count+1)}>
Increment
</button>

<button onClick={()=>setCount(count-1)}>
Decrement
</button>

<button onClick={()=>setCount(0)}>
Reset
</button>

</div>

);

}

export default App;`}
</pre>

</div>


{/* SAMPLE OUTPUT */}

<div className="experiment8-card">

<h2 className="experiment8-heading">
Sample Output
</h2>

<div className="exp8-output">

<h2>React Counter App</h2>

<h3>Count: 3</h3>

<div className="exp8-buttons">

<button className="exp8-inc">
Increment
</button>

<button className="exp8-dec">
Decrement
</button>

<button className="exp8-reset">
Reset
</button>

</div>

</div>

</div>


{/* PRACTICE EXERCISE 1 */}

<div className="experiment8-card">

<h2 className="experiment8-heading">
Practice Exercise 1
</h2>

<ul className="experiment8-list">

<li>Add buttons to increase and decrease by 5</li>

<li>Display message when counter reaches 10</li>

<li>Prevent counter from going below 0</li>

</ul>

<pre className="experiment8-code">
{`import React, { useState } from "react";

function Counter(){

const [count,setCount] = useState(0);

const increaseFive = () => {

setCount(count + 5);

if(count + 5 === 10){
alert("Counter reached 10!");
}

};

const decreaseFive = () => {

if(count - 5 >= 0){
setCount(count - 5);
}else{
alert("Counter cannot go below 0");
}

};

return(

<div>

<h2>{count}</h2>

<button onClick={increaseFive}>
+5
</button>

<button onClick={decreaseFive}>
-5
</button>

</div>

);

}

export default Counter;`}
</pre>

</div>


{/* PRACTICE EXERCISE 2 */}

<div className="experiment8-card">

<h2 className="experiment8-heading">
Practice Exercise 2
</h2>

<ul className="experiment8-list">

<li>Disable decrement button when counter is 0</li>

<li>Add maximum counter limit of 20</li>

<li>Disable increment when limit is reached</li>

<li>Add Reset button to restart counter</li>

</ul>

<pre className="experiment8-code">
{`import React, { useState } from "react";

function Counter(){

const [count,setCount] = useState(0);

const increment = () => {

if(count < 20){
setCount(count + 1);
}else{
alert("Maximum limit reached (20)");
}

};

const decrement = () => {

if(count > 0){
setCount(count - 1);
}

};

const resetCounter = () => {
setCount(0);
};

return(

<div>

<h2>{count}</h2>

<button onClick={increment}>
Increment
</button>

<button
onClick={decrement}
disabled={count === 0}
>
Decrement
</button>

<button onClick={resetCounter}>
Reset
</button>

</div>

);

}

export default Counter;`}
</pre>

</div>


{/* SAMPLE OUTPUT ADVANCED */}

<div className="experiment8-card">

<h2 className="experiment8-heading">
Sample Output (Advanced)
</h2>

<div className="exp8-output">

<h2 className="exp8-title">
React Counter Dashboard
</h2>

{/* COUNTER VALUE */}

<h1 className="exp8-count">
12
</h1>

<p className="exp8-status">
Counter running normally
</p>

{/* BUTTONS */}

<div className="exp8-buttons">

<button className="exp8-inc">
+1
</button>

<button className="exp8-dec">
-1
</button>

<button className="exp8-reset">
Reset
</button>

<button className="exp8-inc">
+5
</button>

<button className="exp8-dec">
-5
</button>

</div>

{/* COUNTER LIMIT INFO */}

<div className="exp8-info">

<p>Minimum Limit: 0</p>

<p>Maximum Limit: 20</p>

</div>

{/* PROGRESS BAR */}

<div className="exp8-progress-container">

<div className="exp8-progress-bar">

</div>

</div>

</div>

</div>


{/* SOURCE CODE */}

<div className="experiment8-card">

<h2 className="experiment8-heading">
Source Code
</h2>

<p className="experiment8-text">
Click below to view the full source code.
</p>

<div className="experiment8-source-container">

<a
href="https://github.com/MADHAN2182006/Experiment8"
target="_blank"
rel="noopener noreferrer"
className="experiment8-source-btn"
>

View Source Code

</a>

</div>

</div>


{/* RESULT */}

<div className="experiment8-result">

<h2 className="experiment8-heading">
Result
</h2>

<p className="experiment8-text">

The React Counter Application was successfully implemented
using React functional components and the useState hook.
This experiment demonstrates state management, event
handling, and dynamic UI updates in React applications.

</p>

</div>


{/* BACK BUTTON */}

<div className="experiment8-back-container">

<button
className="experiment8-back-btn"
onClick={()=>navigate("/")}

>

← Back to Dashboard

</button>

</div>


</div>

);

}

export default Experiment8;