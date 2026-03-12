import { useNavigate } from "react-router-dom";
import "./Experiment6.css";

function Experiment6() {

    const navigate = useNavigate();

    return (

        <div className="experiment6-container">

            <h1 className="experiment6-title">
                Experiment 6
            </h1>

            <p className="experiment6-subtitle">
                Student Mark Analyzer using Arrays and Loops
            </p>


            {/* AIM */}

            <div className="experiment6-card">

                <h2 className="experiment6-heading">
                    Aim
                </h2>

                <p className="experiment6-text">

                    To analyze student marks using JavaScript arrays and loops,
                    calculate total marks, average marks, highest and lowest marks,
                    and display the results dynamically.

                </p>

            </div>


       {/* STEP 1 */}

<div className="experiment6-card">

    <h2 className="experiment6-heading">
        Step 1: Create Project Structure
    </h2>

    <ol className="experiment6-list">

        <li>Create folder named <b>mark-analyzer</b></li>
        <li>Create file: index.html</li>
        <li>Open folder in Visual Studio Code</li>

    </ol>

</div>


{/* STEP 2 */}

<div className="experiment6-card">

    <h2 className="experiment6-heading">
        Step 2: Design HTML Structure
    </h2>

    <ul className="experiment6-list">

        <li>Create heading for application title</li>
        <li>Add input box to enter student marks</li>
        <li>Add button to submit mark</li>
        <li>Add a div element to display results</li>
        <li>Link JavaScript using a script tag</li>

    </ul>

</div>


{/* STEP 3 */}

<div className="experiment6-card">

    <h2 className="experiment6-heading">
        Step 3: Implement JavaScript Logic
    </h2>

    <ul className="experiment6-list">

        <li>Create an array to store student marks</li>
        <li>Read the mark entered in the input field</li>
        <li>Add the mark to the array</li>
        <li>Use loops to calculate total marks</li>
        <li>Find highest and lowest marks</li>
        <li>Calculate average marks</li>

    </ul>

</div>


{/* STEP 4 */}

<div className="experiment6-card">

    <h2 className="experiment6-heading">
        Step 4: Display Results Dynamically
    </h2>

    <ul className="experiment6-list">

        <li>Display marks entered using array join()</li>
        <li>Show total marks</li>
        <li>Show average marks</li>
        <li>Show highest marks</li>
        <li>Show lowest marks</li>

    </ul>

</div>


{/* STEP 5 */}

<div className="experiment6-card">

    <h2 className="experiment6-heading">
        Step 5: Execute and Test
    </h2>

    <ul className="experiment6-list">

        <li>Open index.html in a web browser</li>
        <li>Enter marks one by one</li>
        <li>Click the Add Mark button</li>
        <li>Verify that the results update automatically</li>

    </ul>

</div>


            {/* PROGRAM CODE */}

            <div className="experiment6-card">

                <h2 className="experiment6-heading">
                    Program / Sample Code
                </h2>

                <pre className="experiment6-code">
                    {`<!DOCTYPE html>
<html>
<head>
<title>Student Mark Analyzer</title>
</head>

<body>

<h1>Student Mark Analyzer</h1>

<input type="number" id="markInput">

<button onclick="addMark()">
Add Mark
</button>

<div id="results"></div>

<script>

const marks = [];

function addMark(){

const mark =
Number(document.getElementById("markInput").value);

if(mark>=0 && mark<=100){

marks.push(mark);

analyzeMarks();

}else{

alert("Enter valid mark");

}

}

function analyzeMarks(){

let total = 0;

let highest = marks[0];

let lowest = marks[0];

for(let m of marks){

total += m;

if(m > highest) highest = m;

if(m < lowest) lowest = m;

}

let average =
(total / marks.length).toFixed(2);

document.getElementById("results").innerHTML =

"Marks: " + marks.join(", ") +

"<br>Total: " + total +

"<br>Average: " + average +

"<br>Highest: " + highest +

"<br>Lowest: " + lowest;

}

</script>

</body>
</html>`}
                </pre>

            </div>


            {/* SAMPLE OUTPUT */}

            <div className="experiment6-card">

                <h2 className="experiment6-heading">
                    Sample Output
                </h2>

                <div className="exp6-output">

                    <h2>Student Mark Analyzer</h2>

                    <input className="exp6-input" placeholder="Enter Mark" />

                    <button className="exp6-btn">
                        Add Mark
                    </button>

                    <div className="exp6-results">

                        <p>Marks Entered: 75, 88, 92, 68, 80</p>

                        <p>Total Marks: 403</p>

                        <p>Average Marks: 80.60</p>

                        <p>Highest Marks: 92</p>

                        <p>Lowest Marks: 68</p>

                    </div>

                </div>

            </div>


            {/* PRACTICE EXERCISE 1 */}

            <div className="experiment6-card">

                <h2 className="experiment6-heading">
                    Practice Exercise 1
                </h2>

                <ul className="experiment6-list">

                    <li>Add grade calculation (A, B, C, D, Fail)</li>

                    <li>Display grade for each student mark</li>

                </ul>

                <pre className="experiment6-code">
                    {`function calculateGrade(mark){

if(mark >= 90) return "A";

else if(mark >= 75) return "B";

else if(mark >= 60) return "C";

else if(mark >= 50) return "D";

else return "Fail";

}`}
                </pre>

            </div>


            {/* PRACTICE EXERCISE 2 */}

            <div className="experiment6-card">

                <h2 className="experiment6-heading">
                    Practice Exercise 2
                </h2>

                <ul className="experiment6-list">

                    <li>Count number of pass and fail students</li>

                    <li>Display pass percentage</li>

                </ul>

                <pre className="experiment6-code">
                    {`let pass = 0;

let fail = 0;

for(let m of marks){

if(m >= 50) pass++;

else fail++;

}

let percentage =
((pass / marks.length) * 100).toFixed(2);

`}
                </pre>

            </div>

{/* SAMPLE OUTPUT 2 */}

<div className="experiment6-card">

  <h2 className="experiment6-heading">
    Sample Output (Advanced)
  </h2>

  <div className="exp6-output">

    <h2 className="exp6-title">
      Student Mark Analyzer
    </h2>

    {/* INPUT SECTION */}

    <div className="exp6-input-box">

      <input
        type="number"
        className="exp6-input"
        placeholder="Enter Mark (0 - 100)"
      />

      <button className="exp6-btn">
        Add Mark
      </button>

      <button className="exp6-reset-btn">
        Reset
      </button>

    </div>

    {/* MARK LIST */}

    <div className="exp6-marks">

      <p><b>Marks Entered:</b></p>

      <ul className="exp6-mark-list">

        <li>75</li>
        <li>88</li>
        <li>92</li>
        <li>68</li>
        <li>80</li>

      </ul>

    </div>

    {/* STATISTICS */}

    <div className="exp6-stats">

      <p>Total Marks: <b>403</b></p>

      <p>Average Marks: <b>80.60</b></p>

      <p>Highest Marks: <b>92</b></p>

      <p>Lowest Marks: <b>68</b></p>

    </div>

    {/* PASS FAIL ANALYSIS */}

    <div className="exp6-analysis">

      <p>Pass Students: <b>4</b></p>

      <p>Fail Students: <b>1</b></p>

      <p>Pass Percentage: <b>80%</b></p>

    </div>

    {/* GRADE SECTION */}

    <div className="exp6-grades">

      <h3>Grade Distribution</h3>

      <p>A Grade: 1 Student</p>

      <p>B Grade: 2 Students</p>

      <p>C Grade: 1 Student</p>

      <p>D Grade: 0 Students</p>

      <p>Fail: 1 Student</p>

    </div>

  </div>

</div>


            {/* SOURCE CODE */}

            <div className="experiment6-card">

                <h2 className="experiment6-heading">
                    Source Code
                </h2>

                <p className="experiment6-text">

                    Click below to view the full source code.

                </p>

                <div className="experiment6-source-container">

                    <a
                        href="https://github.com/MADHAN2182006/Experiment6"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="experiment6-source-btn"
                    >

                        View Source Code

                    </a>

                </div>

            </div>


            {/* RESULT */}

            <div className="experiment6-result">

                <h2 className="experiment6-heading">
                    Result
                </h2>

                <p className="experiment6-text">

                    The Student Mark Analyzer was successfully implemented
                    using JavaScript arrays and loops. The application dynamically
                    calculates total marks, average, highest and lowest marks
                    and displays them on the webpage.

                </p>

            </div>


            {/* BACK BUTTON */}

            <div className="experiment6-back-container">

                <button
                    className="experiment6-back-btn"
                    onClick={() => navigate("/")}

                >

                    ← Back to Dashboard

                </button>

            </div>


        </div>

    );

}

export default Experiment6;