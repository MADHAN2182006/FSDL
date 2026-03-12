import { useNavigate } from "react-router-dom";
import "./Experiment4.css";

function Experiment4() {

  const navigate = useNavigate();

  return (
    <div className="experiment4-container">

      <h1 className="experiment4-title">Experiment 4</h1>

      <p className="experiment4-subtitle">
        DOM-based Color Changer Application
      </p>

      {/* AIM */}
      <div className="experiment4-card">

        <h2 className="experiment4-heading">Aim</h2>

        <p className="experiment4-text">
          To develop a DOM-based Color Changer application using HTML, CSS,
          and JavaScript demonstrating DOM manipulation and event handling.
        </p>

      </div>

      {/* STEP 1 */}
      <div className="experiment4-card">

        <h2 className="experiment4-heading">
          Step 1: Create Project Structure
        </h2>

        <ol className="experiment4-list">
          <li>Create a folder named <b>color-changer</b></li>
          <li>Create files: index.html, style.css, script.js</li>
          <li>Open folder in Visual Studio Code</li>
        </ol>

      </div>

      {/* STEP 2 */}
      <div className="experiment4-card">

        <h2 className="experiment4-heading">
          Step 2: Design HTML Structure
        </h2>

        <ul className="experiment4-list">
          <li>Create a heading for the application</li>
          <li>Add buttons for colors</li>
          <li>Link external CSS and JavaScript files</li>
        </ul>

      </div>

      {/* STEP 3 */}
      <div className="experiment4-card">

        <h2 className="experiment4-heading">
          Step 3: Apply CSS Styling
        </h2>

        <ul className="experiment4-list">
          <li>Style layout and buttons</li>
          <li>Add background color transition</li>
        </ul>

      </div>

      {/* STEP 4 */}
      <div className="experiment4-card">

        <h2 className="experiment4-heading">
          Step 4: Implement JavaScript DOM Logic
        </h2>

        <ul className="experiment4-list">
          <li>Access buttons using DOM</li>
          <li>Attach event listeners</li>
          <li>Change background color dynamically</li>
        </ul>

      </div>

      {/* STEP 5 */}
      <div className="experiment4-card">

        <h2 className="experiment4-heading">
          Step 5: Execute and Test
        </h2>

        <ul className="experiment4-list">
          <li>Open index.html in browser</li>
          <li>Click buttons</li>
          <li>Observe background color change</li>
        </ul>

      </div>

      {/* PROGRAM */}
      <div className="experiment4-card">

        <h2 className="experiment4-heading">
          Program / Sample Code
        </h2>

        <pre className="experiment4-code">
{`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Color Changer App</title>
<link rel="stylesheet" href="style.css">
</head>

<body>

<h1>DOM-Based Color Changer</h1>

<div class="button-container">
<button id="redBtn">Red</button>
<button id="greenBtn">Green</button>
<button id="blueBtn">Blue</button>
<button id="resetBtn">Reset</button>
</div>

<script src="script.js"></script>

</body>
</html>`}
        </pre>

      </div>

      {/* SAMPLE OUTPUT 1 */}
      <div className="experiment4-card">

        <h2 className="experiment4-heading">
          Sample Output
        </h2>

        <div className="exp4-output">

          <h1>DOM Color Changer</h1>

          <div className="exp4-buttons">

            <button
              className="red-btn"
              onClick={() => (document.body.style.backgroundColor = "red")}
            >
              Red
            </button>

            <button
              className="green-btn"
              onClick={() => (document.body.style.backgroundColor = "green")}
            >
              Green
            </button>

            <button
              className="blue-btn"
              onClick={() => (document.body.style.backgroundColor = "blue")}
            >
              Blue
            </button>

            <button
              className="reset-btn"
              onClick={() => (document.body.style.backgroundColor = "#0f172a")}
            >
              Reset
            </button>

          </div>

        </div>

      </div>

      {/* PRACTICE EXERCISE 1 */}
      <div className="experiment4-card">

        <h2 className="experiment4-heading">
          Practice Exercise 1
        </h2>

        <ul className="experiment4-list">

          <li>
            Add an input box to allow users to enter a custom color.
          </li>

          <li>
            Apply the entered color dynamically using DOM manipulation.
          </li>

        </ul>

        <pre className="experiment4-code">
{`<input type="text" id="colorInput" placeholder="Enter color name or hex">

<button id="applyColor">Apply Color</button>

<script>

const input = document.getElementById("colorInput");
const btn = document.getElementById("applyColor");

btn.addEventListener("click", function(){

document.body.style.backgroundColor = input.value;

});

</script>`}
        </pre>

      </div>

      {/* PRACTICE EXERCISE 2 */}
      <div className="experiment4-card">

        <h2 className="experiment4-heading">
          Practice Exercise 2
        </h2>

        <ul className="experiment4-list">

          <li>
            Display the current background color name/code on the screen.
          </li>

          <li>
            Disable buttons after selection and enable reset to activate them again.
          </li>

        </ul>

        <pre className="experiment4-code">
{`const colorText = document.getElementById("colorName");

function changeColor(color){

document.body.style.backgroundColor = color;

colorText.innerText = "Current Color: " + color;

buttons.forEach(btn => btn.disabled = true);

resetBtn.disabled = false;

}`}
        </pre>

      </div>

      {/* SAMPLE OUTPUT 2 */}
      <div className="experiment4-card">

        <h2 className="experiment4-heading">
          Sample Output (Practice Exercise)
        </h2>

        <div className="exp4-output">

          <h1>Advanced Color Changer</h1>

          <p className="exp4-color-text">
            Current Color: Default
          </p>

          <input
            type="text"
            placeholder="Enter color name or hex code"
            className="exp4-input"
            onChange={(e) =>
              (document.body.style.backgroundColor = e.target.value)
            }
          />

          <div className="exp4-buttons">

            <button
              className="red-btn"
              onClick={() => (document.body.style.backgroundColor = "red")}
            >
              Red
            </button>

            <button
              className="green-btn"
              onClick={() => (document.body.style.backgroundColor = "green")}
            >
              Green
            </button>

            <button
              className="blue-btn"
              onClick={() => (document.body.style.backgroundColor = "blue")}
            >
              Blue
            </button>

            <button
              className="reset-btn"
              onClick={() => (document.body.style.backgroundColor = "#0f172a")}
            >
              Reset
            </button>

          </div>

        </div>

      </div>

      {/* SOURCE CODE */}
      <div className="experiment4-card">

        <h2 className="experiment4-heading">
          Source Code
        </h2>

        <p className="experiment4-text">
          Click the button below to view the complete source code on GitHub.
        </p>

        <div className="experiment4-source-container">

          <a
            href="https://github.com/MADHAN2182006/Experiment4"
            target="_blank"
            rel="noopener noreferrer"
            className="experiment4-source-btn"
          >
            View Source Code
          </a>

        </div>

      </div>

      {/* RESULT */}
      <div className="experiment4-result">

        <h2 className="experiment4-heading">
          Result
        </h2>

        <p className="experiment4-text">
          Thus, a DOM-based Color Changer application was successfully
          implemented using JavaScript DOM manipulation and event handling,
          allowing dynamic user interaction without page reload.
        </p>

      </div>

      {/* BACK BUTTON */}
      <div className="experiment4-back-container">

        <button
          className="experiment4-back-btn"
          onClick={() => navigate("/")}
        >
          ← Back to Dashboard
        </button>

      </div>

    </div>
  );
}

export default Experiment4;