import { useNavigate } from "react-router-dom";
import "./Experiment7.css";

function Experiment7() {

  const navigate = useNavigate();

  return (

    <div className="experiment7-container">

      <h1 className="experiment7-title">
        Experiment 7
      </h1>

      <p className="experiment7-subtitle">
        Notes Saver App using Local Storage
      </p>

      {/* AIM */}
      <div className="experiment7-card">

        <h2 className="experiment7-heading">
          Aim
        </h2>

        <p className="experiment7-text">

          To develop a Notes Saver Application using HTML, CSS, and JavaScript
          which allows users to save, view, and delete notes using browser
          Local Storage for persistent storage.

        </p>

      </div>

      {/* STEP 1 */}
      <div className="experiment7-card">

        <h2 className="experiment7-heading">
          Step 1: Create Project Structure
        </h2>

        <ol className="experiment7-list">

          <li>Create folder named <b>notes-app</b></li>
          <li>Create files: index.html, style.css, script.js</li>
          <li>Open folder in Visual Studio Code</li>

        </ol>

      </div>

      {/* STEP 2 */}
      <div className="experiment7-card">

        <h2 className="experiment7-heading">
          Step 2: Design HTML Structure
        </h2>

        <ul className="experiment7-list">

          <li>Add heading for application title</li>
          <li>Add textarea to enter notes</li>
          <li>Add Save Note button</li>
          <li>Add Clear Notes button</li>
          <li>Add a div element to display saved notes</li>

        </ul>

      </div>

      {/* STEP 3 */}
      <div className="experiment7-card">

        <h2 className="experiment7-heading">
          Step 3: Apply CSS Styling
        </h2>

        <ul className="experiment7-list">

          <li>Style textarea, buttons and notes section</li>
          <li>Use padding and margins for readability</li>
          <li>Add background color and borders</li>

        </ul>

      </div>

      {/* STEP 4 */}
      <div className="experiment7-card">

        <h2 className="experiment7-heading">
          Step 4: Implement Local Storage Logic
        </h2>

        <ul className="experiment7-list">

          <li>Read note from textarea</li>
          <li>Store notes in Local Storage using array</li>
          <li>Display saved notes dynamically</li>
          <li>Allow user to clear all notes</li>
          <li>Ensure notes persist after refresh</li>

        </ul>

      </div>

      {/* STEP 5 */}
      <div className="experiment7-card">

        <h2 className="experiment7-heading">
          Step 5: Execute and Test
        </h2>

        <ul className="experiment7-list">

          <li>Open index.html in browser</li>
          <li>Enter a note and click Save Note</li>
          <li>Verify the note appears in list</li>
          <li>Refresh browser and confirm notes remain</li>
          <li>Click Clear Notes to remove all notes</li>

        </ul>

      </div>

      {/* PROGRAM CODE */}
      <div className="experiment7-card">

        <h2 className="experiment7-heading">
          Program / Sample Code
        </h2>

        <pre className="experiment7-code">
{`<!DOCTYPE html>
<html>
<head>
<title>Notes Saver</title>
</head>

<body>

<h1>Notes Saver</h1>

<textarea id="noteInput"></textarea>

<button onclick="saveNote()">
Save Note
</button>

<button onclick="clearNotes()">
Clear Notes
</button>

<div id="notesList"></div>

<script>

function saveNote(){

let notes =
JSON.parse(localStorage.getItem("notes")) || [];

let note =
document.getElementById("noteInput").value;

notes.push(note);

localStorage.setItem("notes", JSON.stringify(notes));

displayNotes();

}

function clearNotes(){

localStorage.removeItem("notes");

displayNotes();

}

function displayNotes(){

let notes =
JSON.parse(localStorage.getItem("notes")) || [];

let list =
document.getElementById("notesList");

list.innerHTML = "";

notes.forEach((note,i)=>{

list.innerHTML += (i+1) + ". " + note + "<br>";

});

}

</script>

</body>
</html>`}
        </pre>

      </div>

      {/* SAMPLE OUTPUT */}
      <div className="experiment7-card">

        <h2 className="experiment7-heading">
          Sample Output
        </h2>

        <div className="exp7-output">

          <h2>Notes Saver</h2>

          <textarea
            className="exp7-textarea"
            placeholder="Enter your note..."
          ></textarea>

          <div className="exp7-btn-box">

            <button className="exp7-save-btn">
              Save Note
            </button>

            <button className="exp7-clear-btn">
              Clear Notes
            </button>

          </div>

          <div className="exp7-notes">

            <p>1. Complete Full Stack Lab</p>
            <p>2. Prepare Portfolio Website</p>
            <p>3. Study JavaScript DOM</p>

          </div>

        </div>

      </div>

      {/* PRACTICE EXERCISE 1 */}
      <div className="experiment7-card">

        <h2 className="experiment7-heading">
          Practice Exercise 1
        </h2>

        <ul className="experiment7-list">

          <li>Add a delete option for individual notes.</li>
          <li>Display note creation date and time.</li>

        </ul>

        <pre className="experiment7-code">
{`function deleteNote(index){

let notes =
JSON.parse(localStorage.getItem("notes")) || [];

notes.splice(index,1);

localStorage.setItem("notes",
JSON.stringify(notes));

displayNotes();

}

function saveNote(){

let notes =
JSON.parse(localStorage.getItem("notes")) || [];

let noteText =
document.getElementById("noteInput").value;

let date =
new Date().toLocaleString();

notes.push({
text: noteText,
time: date
});

localStorage.setItem("notes",
JSON.stringify(notes));

}`}
        </pre>

      </div>

      {/* PRACTICE EXERCISE 2 */}
      <div className="experiment7-card">

        <h2 className="experiment7-heading">
          Practice Exercise 2
        </h2>

        <ul className="experiment7-list">

          <li>Add a search box to filter saved notes.</li>
          <li>Limit notes to a maximum of 10 entries.</li>

        </ul>

        <pre className="experiment7-code">
{`const searchInput =
document.getElementById("searchNote");

searchInput.addEventListener("input", function(){

let filter =
searchInput.value.toLowerCase();

let notes =
document.querySelectorAll(".note");

notes.forEach(note => {

if(note.textContent
.toLowerCase().includes(filter)){

note.style.display = "block";

}else{

note.style.display = "none";

}

});

});

/* Limit notes */

if(notes.length >= 10){

alert("Maximum 10 notes allowed");

return;

}`}
        </pre>

      </div>

      {/* SAMPLE OUTPUT (ADVANCED) */}
      <div className="experiment7-card">

        <h2 className="experiment7-heading">
          Sample Output (Advanced)
        </h2>

        <div className="exp7-output">

          <h2 className="exp7-title">Notes Saver</h2>

          <textarea
            className="exp7-textarea"
            placeholder="Enter your note here..."
          ></textarea>

          <div className="exp7-btn-box">

            <button className="exp7-save-btn">
              Save Note
            </button>

            <button className="exp7-clear-btn">
              Clear Notes
            </button>

          </div>

          <input
            type="text"
            className="exp7-search"
            placeholder="Search notes..."
          />

          <div className="exp7-notes">

            <div className="exp7-note-card">

              <p>Complete Full Stack Lab</p>

              <small>Created: 12 May 2026, 10:30 AM</small>

              <button className="exp7-delete-btn">
                Delete
              </button>

            </div>

            <div className="exp7-note-card">

              <p>Prepare Portfolio Website</p>

              <small>Created: 13 May 2026, 4:20 PM</small>

              <button className="exp7-delete-btn">
                Delete
              </button>

            </div>

            <div className="exp7-note-card">

              <p>Study JavaScript DOM</p>

              <small>Created: 14 May 2026, 8:45 PM</small>

              <button className="exp7-delete-btn">
                Delete
              </button>

            </div>

          </div>

        </div>

      </div>

      {/* SOURCE CODE */}
      <div className="experiment7-card">

        <h2 className="experiment7-heading">
          Source Code
        </h2>

        <p className="experiment7-text">
          Click the button below to view the complete source code.
        </p>

        <div className="experiment7-source-container">

          <a
            href="https://github.com/MADHAN2182006/Experiment7"
            target="_blank"
            rel="noopener noreferrer"
            className="experiment7-source-btn"
          >
            View Source Code
          </a>

        </div>

      </div>

      {/* RESULT */}
      <div className="experiment7-result">

        <h2 className="experiment7-heading">
          Result
        </h2>

        <p className="experiment7-text">

          The Notes Saver App was successfully implemented using
          HTML, CSS, and JavaScript Local Storage. It allows users
          to save, view, and clear notes with persistent storage
          across browser refreshes.

        </p>

      </div>

      {/* BACK BUTTON */}
      <div className="experiment7-back-container">

        <button
          className="experiment7-back-btn"
          onClick={() => navigate("/")}
        >
          ← Back to Dashboard
        </button>

      </div>

    </div>

  );

}

export default Experiment7;