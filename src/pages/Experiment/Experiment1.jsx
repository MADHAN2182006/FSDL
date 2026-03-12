import React from "react";
import "./Experiment1.css";
import { useNavigate } from "react-router-dom";

const Experiment1 = () => {

  const navigate = useNavigate();
  
  return (
    <div className="experiment1-page">

      <header className="experiment1-header">
        <h1 className="experiment1-header-title">
          Experiment 1
        </h1>

        <p className="experiment1-header-description">
          Installation and Setup of VS Code, Node.js, and GitHub
        </p>
      </header>

      <section className="experiment1-main-container">

        {/* AIM */}

        <div className="experiment1-card experiment1-aim-card">

          <h2 className="experiment1-aim-title">
            Aim
          </h2>

          <p className="experiment1-aim-text">
            To install and configure essential development tools such as Visual Studio Code,
            Node.js, and GitHub required for Full Stack Web Application development.
          </p>

        </div>


        {/* STEP 1 */}

        <div className="experiment1-card experiment1-step1-card">

          <h2 className="experiment1-step1-title">
            Step 1: Install Visual Studio Code
          </h2>

          <ol className="experiment1-step1-list">

            <li className="experiment1-step1-item">
              Open a web browser and visit https://code.visualstudio.com
            </li>

            <li className="experiment1-step1-item">
              Download the installer suitable for your operating system
            </li>

            <li className="experiment1-step1-item">
              Run the installer and follow the on-screen instructions
            </li>

            <li className="experiment1-step1-item">
              Launch VS Code after installation
            </li>

            <li className="experiment1-step1-item">
              Install useful extensions like Live Server, Prettier, and JavaScript Snippets
            </li>

          </ol>

        </div>


        {/* STEP 2 */}

        <div className="experiment1-card experiment1-step2-card">

          <h2 className="experiment1-step2-title">
            Step 2: Install Node.js
          </h2>

          <ol className="experiment1-step2-list">

            <li className="experiment1-step2-item">
              Visit the official Node.js website https://nodejs.org
            </li>

            <li className="experiment1-step2-item">
              Download the LTS (Long Term Support) version
            </li>

            <li className="experiment1-step2-item">
              Run the installer and complete the installation
            </li>

            <li className="experiment1-step2-item">
              Open Command Prompt or VS Code Terminal
            </li>

            <li className="experiment1-step2-item">
              Verify installation using the commands below
            </li>

          </ol>

          <div className="experiment1-step2-command-terminal">
            <pre className="experiment1-step2-command-code">
node -v <br />
npm -v
            </pre>
          </div>

          <h3 className="experiment1-step2-sample-title">
            Sample Output
          </h3>

          <div className="experiment1-step2-output-terminal">
            <pre className="experiment1-step2-output-code">
{`PS C:\\Users\\madhan> node -v
v24.11.1

PS C:\\Users\\madhan> npm -v
11.6.2`}
            </pre>
          </div>

        </div>


        {/* STEP 3 */}

        <div className="experiment1-card experiment1-step3-card">

          <h2 className="experiment1-step3-title">
            Step 3: Install Git
          </h2>

          <ol className="experiment1-step3-list">

            <li className="experiment1-step3-item">
              Download Git from https://git-scm.com
            </li>

            <li className="experiment1-step3-item">
              Install Git using default settings
            </li>

            <li className="experiment1-step3-item">
              Open Command Prompt or VS Code terminal
            </li>

            <li className="experiment1-step3-item">
              Verify installation using the command below
            </li>

          </ol>

          <div className="experiment1-step3-command-terminal">
            <pre className="experiment1-step3-command-code">
git --version
            </pre>
          </div>

          <h3 className="experiment1-step3-sample-title">
            Sample Output
          </h3>

          <div className="experiment1-step3-output-terminal">
            <pre className="experiment1-step3-output-code">
{`PS C:\\Users\\madhan> git -v
git version 2.52.0.windows.1`}
            </pre>
          </div>

        </div>


        {/* STEP 4 */}

        <div className="experiment1-card experiment1-step4-card">

          <h2 className="experiment1-step4-title">
            Step 4: Configure GitHub
          </h2>

          <ol className="experiment1-step4-list">

            <li className="experiment1-step4-item">
              Create a GitHub account by visiting https://github.com
            </li>

            <li className="experiment1-step4-item">
              Open Command Prompt or VS Code Terminal
            </li>

            <li className="experiment1-step4-item">
              Configure Git using the following commands
            </li>

            <li className="experiment1-step4-item">
              Verify configuration using git config --list
            </li>

          </ol>

          <div className="experiment1-step4-command-terminal">
            <pre className="experiment1-step4-command-code">
{`git config --global user.name "MADHAN2182006"
git config --global user.email "madhan2182006@gmail.com"
git config --list`}
            </pre>
          </div>

          <h3 className="experiment1-step4-sample-title">
            Sample Output
          </h3>

          <div className="experiment1-step4-output-terminal">
            <pre className="experiment1-step4-output-code">
{`PS C:\\Users\\madhan> git config --list
user.name=MADHAN2182006
user.email=madhan2182006@gmail.com`}
            </pre>
          </div>

        </div>


   {/* PRACTICE EXERCISE 1 */}

<div className="experiment1-practice1-card">

  <h2 className="experiment1-practice1-title">
    Practice Exercise 1
  </h2>

  <h3 className="experiment1-practice1-step1-title">
    1. Verify Node.js, npm, and Git installations
  </h3>

  <div className="experiment1-practice1-step1-terminal">
    <pre className="experiment1-practice1-step1-code">
{`node -v
npm -v
git --version`}
    </pre>
  </div>

  <h3 className="experiment1-practice1-step2-title">
    2. Create a Git Repository
  </h3>

  <div className="experiment1-practice1-step2-terminal">
    <pre className="experiment1-practice1-step2-code">
{`mkdir my-project
cd my-project
git init`}
    </pre>
  </div>

  <h3 className="experiment1-practice1-step2-title">
    Sample Output
  </h3>

  <div className="experiment1-practice1-step2-output-terminal">
    <pre className="experiment1-practice1-step2-output-code">
{`PS F:\\SEM 6\\FSDL\\Experiment 2> git init
Initialized empty Git repository in F:/SEM 6/FSDL/Experiment 2/.git/`}
    </pre>
  </div>

  <h3 className="experiment1-practice1-step3-title">
    3. Make the First Commit
  </h3>

  <div className="experiment1-practice1-step3-terminal">
    <pre className="experiment1-practice1-step3-code">
{`git add .
git commit -m "first commit"`}
    </pre>
  </div>

  <h3 className="experiment1-practice1-step2-title">
    Sample Output
  </h3>

  <div className="experiment1-practice1-step3-output-terminal">
    <pre className="experiment1-practice1-step3-output-code">
{`PS F:\\SEM 6\\FSDL\\Experiment 2> git add .

PS F:\\SEM 6\\FSDL\\Experiment 2> git commit -m "first commit"

[master (root-commit) 97d36ad] first commit
2 files changed, 254 insertions(+)
create mode 100644 Record.docx
create mode 100644 index.html`}
    </pre>
  </div>

</div>
{/* PRACTICE EXERCISE 2 */}

<div className="experiment1-practice1-card">

  <h2 className="experiment1-practice1-title">
    Practice Exercise 2
  </h2>

  <h3 className="experiment1-practice1-step1-title">
    1. Install VS Code Extensions
  </h3>

  <ul className="experiment1-practice2-list">

    <li className="experiment1-practice2-item">
      Live Server
    </li>

    <li className="experiment1-practice2-item">
      Prettier – Code Formatter
    </li>

    <li className="experiment1-practice2-item">
      JavaScript ES6 Snippets
    </li>

  </ul>

  <h3 className="experiment1-practice1-step2-title">
    2. Clone a Public GitHub Repository
  </h3>

  <div className="experiment1-practice2-command-terminal">
    <pre className="experiment1-practice2-command-code">
{`git clone https://github.com/example/repository.git`}
    </pre>
  </div>

  <h3 className="experiment1-practice1-step2-title">
    Sample Output
  </h3>

  <div className="experiment1-practice2-output-terminal">
    <pre className="experiment1-practice2-output-code">
{`PS F:\\SEM 6\\FSDL\\Experiment 1\\clone> git clone
https://github.com/MADHAN2182006/Experiment1FSD.git

Cloning into 'Experiment1FSD'...

remote: Enumerating objects: 4, done.
remote: Counting objects: 100% (4/4), done.
remote: Compressing objects: 100% (4/4), done.

Receiving objects: 100% (4/4), 31.29 KiB | 267.00 KiB/s, done.`}
    </pre>
  </div>

</div>


        {/* RESULT */}

        <div className="experiment1-card experiment1-result-card">

          <h2 className="experiment1-result-title">
            Result
          </h2>

          <p className="experiment1-result-text">
            Thus, Visual Studio Code, Node.js, and Git were successfully installed and configured.
            The installations were verified using terminal commands. Git was initialized and the
            first commit was created successfully. VS Code extensions were installed and a GitHub
            repository was cloned successfully.
          </p>

        </div>

      </section>

       {/* BACK BUTTON */}

      <div className="experiment3-back-container">

        <button
          className="experiment3-back-btn"
          onClick={() => navigate("/")}
        >
          ← Back to Dashboard
        </button>

      </div>

      <footer className="experiment1-footer">
        <p className="experiment1-footer-text">
          Full Stack Development Lab - Experiment 1
        </p>
      </footer>

    </div>
  );
};

export default Experiment1;