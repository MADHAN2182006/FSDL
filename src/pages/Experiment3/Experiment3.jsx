import { useNavigate } from "react-router-dom";
import "./Experiment3.css";

function Experiment3() {

    const navigate = useNavigate();

    return (
        <div className="experiment3-container">

            <h1 className="experiment3-title">Experiment 3</h1>

            <p className="experiment3-subtitle">
                Responsive Portfolio Website using CSS & Media Queries
            </p>

            {/* AIM */}

            <div className="experiment3-card">

                <h2 className="experiment3-heading">Aim</h2>

                <p className="experiment3-text">
                    To design and develop a responsive personal portfolio website
                    using HTML5, CSS3, and media queries so that the webpage adapts
                    effectively to different screen sizes such as mobile, tablet,
                    and desktop devices.
                </p>

            </div>


            {/* STEP 1 */}

            <div className="experiment3-card">

                <h2 className="experiment3-heading">
                    Step 1: Create Project Structure
                </h2>

                <ol className="experiment3-list">
                    <li>Create a folder named <b>portfolio</b></li>
                    <li>Create two files inside the folder</li>
                    <li>index.html</li>
                    <li>style.css</li>
                    <li>Open the folder in Visual Studio Code</li>
                </ol>

            </div>


            {/* STEP 2 */}

            <div className="experiment3-card">

                <h2 className="experiment3-heading">
                    Step 2: Create HTML Structure
                </h2>

                <ul className="experiment3-list">
                    <li>Open index.html</li>
                    <li>Add basic HTML5 structure</li>
                    <li>Use semantic elements:</li>
                    <li>&lt;header&gt; for name and role</li>
                    <li>&lt;section&gt; for About, Skills, Projects</li>
                    <li>&lt;footer&gt; for contact details</li>
                </ul>

            </div>


            {/* STEP 3 */}

            <div className="experiment3-card">

                <h2 className="experiment3-heading">
                    Step 3: Add Portfolio Content
                </h2>

                <ul className="experiment3-list">
                    <li>Add your name and career objective</li>
                    <li>Create sections for About Me, Skills, Projects</li>
                    <li>Use proper headings (h1, h2, h3)</li>
                </ul>

            </div>


            {/* STEP 4 */}

            <div className="experiment3-card">

                <h2 className="experiment3-heading">
                    Step 4: Apply Basic CSS Styling
                </h2>

                <ul className="experiment3-list">
                    <li>Add body background and font styles</li>
                    <li>Style sections with spacing and padding</li>
                    <li>Use flexible units like %, rem, em</li>
                </ul>

            </div>


            {/* STEP 5 */}

            <div className="experiment3-card">

                <h2 className="experiment3-heading">
                    Step 5: Implement Media Queries
                </h2>

                <ul className="experiment3-list">
                    <li>Add responsive design using media queries</li>
                    <li>Mobile devices</li>
                    <li>Tablet devices</li>
                    <li>Desktop devices</li>
                </ul>

            </div>


            {/* PROGRAM */}

            <div className="experiment3-card">

                <h2 className="experiment3-heading">
                    Program / Sample Code
                </h2>

                <pre className="experiment3-code">
{`<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8">
<title>My Portfolio</title>
<link rel="stylesheet" href="style.css">
</head>

<body>

<header>
<h1>Madhan M</h1>
<p>Web Developer | Frontend Enthusiast</p>
</header>

<section class="about">
<h2>About Me</h2>
<p>
I am a passionate web developer interested in building
responsive and user-friendly applications.
</p>
</section>

<section class="skills">
<h2>Skills</h2>
<ul>
<li>HTML5</li>
<li>CSS3</li>
<li>JavaScript</li>
<li>React</li>
</ul>
</section>

<section class="projects">
<h2>Projects</h2>
<p>Responsive Portfolio Website</p>
<p>Static E-Commerce Webpage</p>
</section>

<footer>
<p>Contact: example@email.com</p>
</footer>

</body>
</html>`}
                </pre>

            </div>


            {/* PRACTICE EXERCISE 1 */}

            <div className="experiment3-card">

                <h2 className="experiment3-heading">
                    Practice Exercise 1
                </h2>

                <ul className="experiment3-list">

                    <li>
                        Add a responsive navigation bar that stacks vertically on mobile screens.
                    </li>

                    <li>
                        Change the background color based on screen size using CSS media queries.
                    </li>

                </ul>

                <pre className="experiment3-code">
{`<nav class="navbar">
<ul>
<li>Home</li>
<li>About</li>
<li>Skills</li>
<li>Projects</li>
<li>Contact</li>
</ul>
</nav>

/* CSS */

.navbar ul{
display:flex;
list-style:none;
justify-content:center;
gap:20px;
padding:0;
}

@media (max-width:600px){

.navbar ul{
flex-direction:column;
align-items:center;
}

body{
background-color:#f0f8ff;
}

}`}
                </pre>

            </div>


            {/* PRACTICE EXERCISE 2 */}

            <div className="experiment3-card">

                <h2 className="experiment3-heading">
                    Practice Exercise 2
                </h2>

                <ul className="experiment3-list">

                    <li>
                        Convert the layout to CSS Flexbox or Grid for better responsive structure.
                    </li>

                    <li>
                        Add hover effects to project cards.
                    </li>

                </ul>

                <pre className="experiment3-code">
{`/* Flexbox Layout */

.projects{
display:flex;
gap:20px;
flex-wrap:wrap;
justify-content:center;
}

.project-card{
background:white;
padding:20px;
border-radius:8px;
width:200px;
transition:0.3s;
}

/* Hover Effect */

.project-card:hover{
transform:translateY(-5px);
box-shadow:0 10px 20px rgba(0,0,0,0.2);
}`}
                </pre>

            </div>


            {/* SAMPLE OUTPUT */}

            <div className="experiment3-card">

                <h2 className="experiment3-heading">
                    Sample Output
                </h2>

                <div className="exp3-output">

                    {/* NAVBAR */}

                    <nav className="exp3-nav">

                        <div className="exp3-logo">
                            Madhan<span>M</span>
                        </div>

                        <ul className="exp3-nav-links">
                            <li>Home</li>
                            <li>About</li>
                            <li>Skills</li>
                            <li>Projects</li>
                            <li>Education</li>
                            <li>Contact</li>
                        </ul>

                    </nav>


                    {/* HERO */}

                    <header className="exp3-hero">

                        <h1>
                            Hello, I'm <span>Madhan M</span> 👋
                        </h1>

                        <p className="exp3-subtitle">
                            Web Developer | Frontend Enthusiast
                        </p>

                        <p className="exp3-desc">
                            I create modern, responsive, and user-friendly websites
                            using HTML, CSS and JavaScript.
                        </p>

                        <button className="exp3-btn">
                            View Projects
                        </button>

                    </header>


                    {/* ABOUT */}

                    <section className="exp3-section">

                        <h2>About Me</h2>

                        <p>
                            I am a passionate web developer with strong interest in building
                            responsive and professional web pages. I enjoy creating modern UI
                            with smooth animations and responsive layouts.
                        </p>

                    </section>


                    {/* SKILLS */}

                    <section className="exp3-section">

                        <h2>Skills</h2>

                        <div className="exp3-skill-grid">

                            <div className="exp3-skill-card">HTML5</div>
                            <div className="exp3-skill-card">CSS3</div>
                            <div className="exp3-skill-card">JavaScript</div>
                            <div className="exp3-skill-card">React</div>
                            <div className="exp3-skill-card">Bootstrap</div>
                            <div className="exp3-skill-card">GitHub</div>

                        </div>

                    </section>


                    {/* PROJECTS */}

                    <section className="exp3-section">

                        <h2>Projects</h2>

                        <div className="exp3-project-grid">

                            <div className="exp3-project-card">
                                <h3>Responsive Portfolio Website</h3>
                                <p>Portfolio website with responsive navigation.</p>
                            </div>

                            <div className="exp3-project-card">
                                <h3>Static E-Commerce Webpage</h3>
                                <p>Product layout using HTML and CSS.</p>
                            </div>

                            <div className="exp3-project-card">
                                <h3>JavaScript Mini App</h3>
                                <p>Interactive calculator or to-do list.</p>
                            </div>

                        </div>

                    </section>


                    {/* EDUCATION */}

                    <section className="exp3-section">

                        <h2>Education</h2>

                        <div className="exp3-edu-card">
                            <h3>B.Tech Information Technology</h3>
                            <p>EGSPILLAY ENGINEERING COLLEGE</p>
                            <p>Year: 2023 – 2027</p>
                        </div>

                    </section>


                    {/* CONTACT */}

                    <section className="exp3-section">

                        <h2>Contact</h2>

                        <div className="exp3-contact-flex">

                            <div className="exp3-contact-card">

                                <h3>Contact Details</h3>

                                <p>Email: madhan@gmail.com</p>
                                <p>Phone: +91 98765 43210</p>
                                <p>Location: Tamil Nadu, India</p>

                            </div>

                            <div className="exp3-contact-card">

                                <h3>Send Message</h3>

                                <input type="text" placeholder="Your Name" />
                                <input type="email" placeholder="Your Email" />
                                <textarea placeholder="Your Message"></textarea>

                                <button className="exp3-btn">
                                    Send
                                </button>

                            </div>

                        </div>

                    </section>


                    {/* FOOTER */}

                    <footer className="exp3-footer">
                        © 2026 Madhan M | All Rights Reserved
                    </footer>

                </div>

            </div>


            {/* SOURCE CODE */}

            <div className="experiment3-card">

                <h2 className="experiment3-heading">
                    Source Code
                </h2>

                <p className="experiment3-text">
                    Click the button below to view the complete source code
                    of this Responsive Portfolio Website project on GitHub.
                </p>

                <div className="experiment3-source-container">

                    <a
                        href="https://github.com/MADHAN2182006/Experiment3"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="experiment3-source-btn"
                    >
                        View Source Code
                    </a>

                </div>

            </div>


            {/* RESULT */}

            <div className="experiment3-result">

                <h2 className="experiment3-heading">
                    Result
                </h2>

                <p className="experiment3-text">
                    Thus, a responsive portfolio website was successfully created
                    using CSS media queries, ensuring that the webpage adapts
                    properly to different screen sizes such as mobile, tablet,
                    and desktop devices.
                </p>

            </div>


            {/* BACK BUTTON */}

            <div className="experiment3-back-container">

                <button
                    className="experiment3-back-btn"
                    onClick={() => navigate("/")}
                >
                    ← Back to Dashboard
                </button>

            </div>

        </div>
    );
}

export default Experiment3;