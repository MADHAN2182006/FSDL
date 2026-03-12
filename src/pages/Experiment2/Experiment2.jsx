import { useNavigate } from "react-router-dom";
import "./Experiment2.css";

function Experiment2() {

  const navigate = useNavigate();

  return (
    <div className="experiment2-container">

      <h1 className="experiment2-title">Experiment 2</h1>

      <p className="experiment2-subtitle">
        Designing a Static E-Commerce Webpage using HTML5
      </p>

      {/* AIM */}

      <div className="experiment2-card">
        <h2 className="experiment2-heading">Aim</h2>

        <p className="experiment2-text">
          To design and develop a static E-Commerce webpage using HTML5 by
          applying semantic elements for proper page structure and content
          organization.
        </p>
      </div>


      {/* STEP 1 */}

      <div className="experiment2-card">
        <h2 className="experiment2-heading">
          Step 1: Create Project Folder
        </h2>

        <ol className="experiment2-list">
          <li className="experiment2-list-item">
            Create a new folder named
            <span className="experiment2-highlight"> ecommerce-site</span>
          </li>

          <li className="experiment2-list-item">
            Open the folder using Visual Studio Code
          </li>

          <li className="experiment2-list-item">
            Create a new file named
            <span className="experiment2-highlight"> index.html</span>
          </li>
        </ol>
      </div>


      {/* STEP 2 */}

      <div className="experiment2-card">
        <h2 className="experiment2-heading">
          Step 2: Write Basic HTML5 Structure
        </h2>

        <ol className="experiment2-list">
          <li className="experiment2-list-item">Open index.html</li>

          <li className="experiment2-list-item">
            Add the HTML5 boilerplate structure
          </li>

          <li className="experiment2-list-item">
            Set a proper title for the webpage
          </li>
        </ol>

        <pre className="experiment2-code">
          {`<!DOCTYPE html>
<html>
<head>
<title>My E-Commerce Store</title>
</head>
<body>
</body>
</html>`}
        </pre>
      </div>


      {/* STEP 3 */}

      <div className="experiment2-card">
        <h2 className="experiment2-heading">
          Step 3: Use HTML5 Semantic Elements
        </h2>

        <ul className="experiment2-list">
          <li className="experiment2-list-item">
            &lt;header&gt; for website title
          </li>

          <li className="experiment2-list-item">
            &lt;nav&gt; for navigation menu
          </li>

          <li className="experiment2-list-item">
            &lt;section&gt; for product listing
          </li>

          <li className="experiment2-list-item">
            &lt;article&gt; for product details
          </li>

          <li className="experiment2-list-item">
            &lt;footer&gt; for copyright
          </li>
        </ul>
      </div>


      {/* STEP 4 */}

      <div className="experiment2-card">
        <h2 className="experiment2-heading">
          Step 4: Design Navigation Menu
        </h2>

        <pre className="experiment2-code">
          {`<nav>
<ul>
<li>Home</li>
<li>Products</li>
<li>About</li>
<li>Contact</li>
</ul>
</nav>`}
        </pre>
      </div>


      {/* STEP 5 */}

      <div className="experiment2-card">
        <h2 className="experiment2-heading">
          Step 5: Add Product Details
        </h2>

        <pre className="experiment2-code">
          {`<article>
<h3>Wireless Headphones</h3>
<p>Price: ₹2,499</p>
<p>High quality sound with noise cancellation.</p>
</article>`}
        </pre>
      </div>


      {/* PROGRAM */}

      <div className="experiment2-card">
        <h2 className="experiment2-heading">
          Program / Sample Code
        </h2>

        <pre className="experiment2-code experiment2-large-code">
          {`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>My E-Commerce Store</title>
</head>

<body>

<header>
<h1>Online Shopping Store</h1>
</header>

<nav>
<ul>
<li>Home</li>
<li>Products</li>
<li>About</li>
<li>Contact</li>
</ul>
</nav>

<section>

<h2>Available Products</h2>

<article>
<h3>Wireless Headphones</h3>
<p>Price: ₹2,499</p>
<p>High quality sound with noise cancellation.</p>
</article>

<article>
<h3>Smart Watch</h3>
<p>Price: ₹3,999</p>
<p>Fitness tracking with heart rate monitor.</p>
</article>

</section>

<footer>
<p>© 2025 Online Shopping Store</p>
</footer>

</body>
</html>`}
        </pre>
      </div>


      {/* PRACTICE EXERCISE 1 */}

      <div className="experiment2-card">
        <h2 className="experiment2-heading">
          Practice Exercise 1
        </h2>

        <ul className="experiment2-list">
          <li className="experiment2-list-item">
            Add a semantic &lt;aside&gt; section for offers or advertisements.
          </li>

          <li className="experiment2-list-item">
            Include an embedded image using &lt;figure&gt; and &lt;figcaption&gt;.
          </li>
        </ul>

        <pre className="experiment2-code">
          {`<aside>
<h3>Special Offer</h3>
<p>Get 20% discount on Smart Watches!</p>
</aside>

<figure>
<img src="watch.jpg" alt="Smart Watch">
<figcaption>Latest Smart Watch Collection</figcaption>
</figure>`}
        </pre>
      </div>


      {/* PRACTICE EXERCISE 2 */}

      <div className="experiment2-card">
        <h2 className="experiment2-heading">
          Practice Exercise 2
        </h2>

        <ul className="experiment2-list">
          <li className="experiment2-list-item">
            Add a product table using table elements.
          </li>

          <li className="experiment2-list-item">
            Implement internal navigation using anchor links.
          </li>
        </ul>

        <pre className="experiment2-code">
          {`<a href="#products">Go to Products Section</a>

<section id="products">

<table>

<thead>
<tr>
<th>Product</th>
<th>Price</th>
<th>Stock</th>
</tr>
</thead>

<tbody>
<tr>
<td>Wireless Headphones</td>
<td>₹2,499</td>
<td>Available</td>
</tr>

<tr>
<td>Smart Watch</td>
<td>₹3,999</td>
<td>Available</td>
</tr>
</tbody>

<tfoot>
<tr>
<td colspan="3">End of Product List</td>
</tr>
</tfoot>

</table>

</section>`}
        </pre>
      </div>


      {/* SAMPLE OUTPUT */}

      <div className="experiment2-card">
        <h2 className="experiment2-heading">
          Sample Output
        </h2>

        <div className="experiment2-output">

          <nav className="exp2-nav">
            <h3 className="exp2-logo">NEXUS</h3>

            <ul className="exp2-nav-links">
              <li>Home</li>
              <li>Special Offers</li>
              <li>Products</li>
              <li>Specifications</li>
              <li>Contact</li>
            </ul>
          </nav>

          <div className="exp2-hero">
            <h1 className="exp2-hero-title">
              Next-Gen Electronics
            </h1>

            <p className="exp2-hero-text">
              Experience the future of sound and mobility.
            </p>

            <button className="exp2-btn">
              Explore Store
            </button>
          </div>

          <div className="exp2-products">

            <div className="exp2-product-card">
              <h3>Aero-Pods Pro</h3>

              <p className="exp2-price">₹2,499</p>

              <p>
                Hybrid Active Noise Cancellation with 40-hour battery life.
              </p>

              <button className="exp2-btn">
                Add to Cart
              </button>
            </div>


            <div className="exp2-product-card">
              <h3>Titan Smart Watch</h3>

              <p className="exp2-price">₹3,999</p>

              <p>
                AI-driven fitness coaching and AMOLED display.
              </p>

              <button className="exp2-btn">
                Add to Cart
              </button>
            </div>

          </div>


          <div className="exp2-table-box">

            <table className="exp2-table">

              <thead>
                <tr>
                  <th>Product</th>
                  <th>Feature</th>
                  <th>Warranty</th>
                  <th>Price</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Aero-Pods Pro</td>
                  <td>Noise Cancellation</td>
                  <td>1 Year</td>
                  <td>₹2,499</td>
                </tr>

                <tr>
                  <td>Titan Watch</td>
                  <td>AI Coaching</td>
                  <td>2 Years</td>
                  <td>₹3,999</td>
                </tr>
              </tbody>

              <tfoot>
                <tr>
                  <td colSpan="3">Bundle Offer</td>
                  <td>₹5,999</td>
                </tr>
              </tfoot>

            </table>

          </div>

        </div>
      </div>


      {/* SOURCE CODE */}

      <div className="experiment2-card">

        <h2 className="experiment2-heading">
          Source Code
        </h2>

        <p className="experiment2-text">
          Click the button below to view the complete source code
          of this E-Commerce webpage project on GitHub.
        </p>

        <div className="experiment2-source-container">

          <a
            href="https://github.com/MADHAN2182006/Experiment2"
            target="_blank"
            rel="noopener noreferrer"
            className="experiment2-source-btn"
          >
            View Source Code
          </a>

        </div>

      </div>


      {/* RESULT */}

      <div className="experiment2-result">

        <h2 className="experiment2-heading">
          Result
        </h2>

        <p className="experiment2-text">
          Thus, a static E-Commerce webpage was successfully designed
          using HTML5 semantic elements demonstrating proper webpage
          structure and content organization.
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

export default Experiment2;