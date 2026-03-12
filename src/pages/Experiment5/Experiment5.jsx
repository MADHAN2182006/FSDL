import { useNavigate } from "react-router-dom";
import "./Experiment5.css";

function Experiment5() {

    const navigate = useNavigate();

    return (

        <div className="experiment5-container">

            <h1 className="experiment5-title">
                Experiment 5
            </h1>

            <p className="experiment5-subtitle">
                To-Do List Application using JavaScript
            </p>


            {/* AIM */}

            <div className="experiment5-card">

                <h2 className="experiment5-heading">
                    Aim
                </h2>

                <p className="experiment5-text">

                    To build a dynamic To-Do List application using HTML, CSS and JavaScript
                    that allows users to add tasks dynamically using DOM manipulation
                    and event handling.

                </p>

            </div>


            {/* STEP 1 */}

            <div className="experiment5-card">

                <h2 className="experiment5-heading">
                    Step 1: Create Project Structure
                </h2>

                <ol className="experiment5-list">

                    <li>Create folder named <b>todo-app</b></li>
                    <li>Create files: index.html, style.css, script.js</li>
                    <li>Open folder in Visual Studio Code</li>

                </ol>

            </div>


            {/* STEP 2 */}

            <div className="experiment5-card">

                <h2 className="experiment5-heading">
                    Step 2: Design HTML Structure
                </h2>

                <ul className="experiment5-list">

                    <li>Create heading for application title</li>
                    <li>Add input box for task</li>
                    <li>Add button to submit task</li>
                    <li>Add unordered list to display tasks</li>

                </ul>

            </div>


            {/* STEP 3 */}

            <div className="experiment5-card">

                <h2 className="experiment5-heading">
                    Step 3: Apply CSS Styling
                </h2>

                <ul className="experiment5-list">

                    <li>Style input box and button</li>
                    <li>Improve readability using margins and padding</li>

                </ul>

            </div>


            {/* STEP 4 */}

            <div className="experiment5-card">

                <h2 className="experiment5-heading">
                    Step 4: Implement JavaScript Logic
                </h2>

                <ul className="experiment5-list">

                    <li>Access DOM elements</li>
                    <li>Add click event for Add Task button</li>
                    <li>Create new list item dynamically</li>
                    <li>Append task to list</li>

                </ul>

            </div>


            {/* PROGRAM */}

            <div className="experiment5-card">

                <h2 className="experiment5-heading">
                    Program / Sample Code
                </h2>

                <pre className="experiment5-code">
                    {`<!DOCTYPE html>
<html>
<head>
<title>To-Do List</title>
<link rel="stylesheet" href="style.css">
</head>

<body>

<h1>To-Do List</h1>

<input type="text" id="taskInput">

<button onclick="addTask()">
Add Task
</button>

<ul id="taskList"></ul>

<script>

function addTask(){

let input =
document.getElementById("taskInput");

let task =
input.value;

let li =
document.createElement("li");

li.textContent = task;

document
.getElementById("taskList")
.appendChild(li);

input.value = "";

}

</script>

</body>
</html>`}
                </pre>

            </div>


            {/* SAMPLE OUTPUT 1 */}

            <div className="experiment5-card">

                <h2 className="experiment5-heading">
                    Sample Output
                </h2>

                <div className="exp5-output">

                    <h2>To-Do List</h2>

                    <input
                        className="exp5-input"
                        placeholder="Enter task"
                    />

                    <button className="exp5-add-btn">
                        Add Task
                    </button>

                    <ul className="exp5-list">

                        <li>Complete Web Programming Lab</li>

                    </ul>

                </div>

            </div>


            {/* PRACTICE EXERCISE 1 */}

            <div className="experiment5-card">

                <h2 className="experiment5-heading">
                    Practice Exercise 1
                </h2>

                <ul className="experiment5-list">

                    <li>Add delete button for each task</li>

                    <li>Allow tasks to be marked as completed (strike-through)</li>

                </ul>

                <pre className="experiment5-code">
                    {`const li = document.createElement("li");

li.textContent = task;

/* mark as completed */

li.addEventListener("click", function(){

li.classList.toggle("completed");

});

/* delete button */

const deleteBtn = document.createElement("button");

deleteBtn.textContent = "Delete";

deleteBtn.onclick = function(){

li.remove();

};

li.appendChild(deleteBtn);

taskList.appendChild(li);`}
                </pre>

            </div>


            {/* PRACTICE EXERCISE 2 */}

            <div className="experiment5-card">

                <h2 className="experiment5-heading">
                    Practice Exercise 2
                </h2>

                <ul className="experiment5-list">

                    <li>Prevent duplicate tasks</li>

                    <li>Add task counter (Total / Completed)</li>

                </ul>

                <pre className="experiment5-code">
                    {`const tasks = [];

function addTask(){

const text = taskInput.value.trim();

/* prevent duplicates */

if(tasks.includes(text)){

alert("Task already exists");

return;

}

tasks.push(text);

/* update task count */

totalTasks.innerText = tasks.length;

}`}
                </pre>

            </div>


            {/* SAMPLE OUTPUT */}

            <div className="experiment5-card">

                <h2 className="experiment5-heading">
                    Sample Output (Advanced)
                </h2>

                <div className="exp5-output">

                    <h2 className="exp5-title">
                        Advanced To-Do List
                    </h2>

                    <div className="exp5-input-box">

                        <input
                            className="exp5-input"
                            placeholder="Enter task"
                        />

                        <button className="exp5-add-btn">
                            Add
                        </button>

                    </div>

                    <div className="exp5-count">

                        <p>Total: 3</p>

                        <p>Completed: 1</p>

                        <p>Pending: 2</p>

                    </div>

                    <ul className="exp5-list">

                        <li className="completed">
                            <span>Learn JavaScript</span>
                            <button className="delete-btn">Delete</button>
                        </li>

                        <li>
                            <span>Finish Project</span>
                            <button className="delete-btn">Delete</button>
                        </li>

                    </ul>

                </div>

            </div>


            {/* SOURCE CODE */}

            <div className="experiment5-card">

                <h2 className="experiment5-heading">
                    Source Code
                </h2>

                <p className="experiment5-text">

                    Click the button below to view the complete source code.

                </p>

                <div className="experiment5-source-container">

                    <a
                        href="https://github.com/MADHAN2182006/Experiment5"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="experiment5-source-btn"
                    >

                        View Source Code

                    </a>

                </div>

            </div>

            {/* RESULT */}

            <div className="experiment5-result">

                <h2 className="experiment5-heading">
                    Result
                </h2>

                <p className="experiment5-text">

                    Thus, a dynamic To-Do List application was successfully implemented
                    using HTML, CSS and JavaScript. The application allows users to add,
                    delete and manage tasks dynamically through DOM manipulation and
                    event handling without refreshing the webpage.

                </p>

            </div>


            {/* BACK BUTTON */}

            <div className="experiment5-back-container">

                <button
                    className="experiment5-back-btn"
                    onClick={() => navigate("/")}

                >

                    ← Back to Dashboard

                </button>

            </div>

        </div>

    );

}

export default Experiment5;