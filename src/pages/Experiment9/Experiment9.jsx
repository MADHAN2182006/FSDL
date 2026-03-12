import { useNavigate } from "react-router-dom";
import jacket from "../../assets/jacket.jpg";
import jacket1 from "../../assets/jacket1.jpg";
import necklace from "../../assets/necklace.webp";
import necklace1 from "../../assets/necklace1.jpg";
import backpack from "../../assets/backpack.jpg";
import backpack1 from "../../assets/backpack1.jpg";
import "./Experiment9.css";

function Experiment9(){

const navigate = useNavigate();

return(

<div className="experiment9-container">

<h1 className="experiment9-title">
Experiment 9
</h1>

<p className="experiment9-subtitle">
Product List Page using useEffect
</p>


{/* AIM */}

<div className="experiment9-card">

<h2 className="experiment9-heading">
Aim
</h2>

<p className="experiment9-text">

To create a Product List Page using React functional components
and the useEffect hook to fetch and display product data dynamically.

</p>

</div>


{/* STEP 1 */}

<div className="experiment9-card">

<h2 className="experiment9-heading">
Step 1: Create React Application
</h2>

<ol className="experiment9-list">

<li>Ensure Node.js is installed</li>

<li>Open Terminal / Command Prompt</li>

<li>Run command: <b>npx create-react-app product-list-app</b></li>

<li>Navigate to project folder: <b>cd product-list-app</b></li>

<li>Start development server: <b>npm start</b></li>

</ol>

</div>


{/* STEP 2 */}

<div className="experiment9-card">

<h2 className="experiment9-heading">
Step 2: Modify App Component
</h2>

<ul className="experiment9-list">

<li>Open project in Visual Studio Code</li>

<li>Navigate to <b>src/App.js</b></li>

<li>Remove default React template code</li>

<li>Import <b>useState</b> and <b>useEffect</b> hooks</li>

</ul>

</div>


{/* STEP 3 */}

<div className="experiment9-card">

<h2 className="experiment9-heading">
Step 3: Implement Product Fetch Logic
</h2>

<ul className="experiment9-list">

<li>Create state variable to store products</li>

<li>Use <b>useEffect()</b> to fetch API data</li>

<li>Fetch data when component loads</li>

<li>Store fetched data in state</li>

</ul>

</div>


{/* STEP 4 */}

<div className="experiment9-card">

<h2 className="experiment9-heading">
Step 4: Display Product List
</h2>

<ul className="experiment9-list">

<li>Loop through product array using map()</li>

<li>Display product title</li>

<li>Display product price</li>

<li>Style product cards using CSS</li>

</ul>

</div>


{/* STEP 5 */}

<div className="experiment9-card">

<h2 className="experiment9-heading">
Step 5: Execute and Test
</h2>

<ul className="experiment9-list">

<li>Open browser and run React application</li>

<li>Verify products appear automatically</li>

<li>Refresh page to confirm data reloads</li>

</ul>

</div>


{/* PROGRAM CODE */}

<div className="experiment9-card">

<h2 className="experiment9-heading">
Program / Sample Code
</h2>

<pre className="experiment9-code">
{`import React, { useState, useEffect } from "react";
import "./App.css";

function App(){

const [products,setProducts] = useState([]);

useEffect(()=>{

fetch("https://fakestoreapi.com/products")

.then(res => res.json())

.then(data => setProducts(data));

},[]);

return(

<div className="container">

<h1>Product List</h1>

<div className="product-list">

{products.map(product => (

<div className="product" key={product.id}>

<h3>{product.title}</h3>

<p>Price: ₹{product.price}</p>

</div>

))}

</div>

</div>

);

}

export default App;`}
</pre>

</div>

{/* SAMPLE OUTPUT */}

<div className="experiment9-card">

<h2 className="experiment9-heading">
Sample Output
</h2>

<div className="exp9-output">

<h2 className="exp9-title">
Product List
</h2>

<div className="exp9-products">

{/* PRODUCT 1 */}

<div className="exp9-product-card">

<img
className="exp9-product-img"
src={jacket}
alt="Jacket"
/>

<h3>Men's Cotton Jacket</h3>

<p className="exp9-category">
Category: Men's Clothing
</p>

<p className="exp9-price">
Price: ₹55.99
</p>

<p className="exp9-rating">
⭐ 4.5 / 5
</p>

<button className="exp9-cart-btn">
Add to Cart
</button>

</div>


{/* PRODUCT 2 */}

<div className="exp9-product-card">

<img
className="exp9-product-img"
src={necklace}
alt="Necklace"
/>

<h3>Women's Gold Necklace</h3>

<p className="exp9-category">
Category: Jewelry
</p>

<p className="exp9-price">
Price: ₹168.00
</p>

<p className="exp9-rating">
⭐ 4.8 / 5
</p>

<button className="exp9-cart-btn">
Add to Cart
</button>

</div>


{/* PRODUCT 3 */}

<div className="exp9-product-card">

<img
className="exp9-product-img"
src={backpack}
alt="Backpack"
/>

<h3>Travel Backpack</h3>

<p className="exp9-category">
Category: Bags
</p>

<p className="exp9-price">
Price: ₹79.99
</p>

<p className="exp9-rating">
⭐ 4.2 / 5
</p>

<button className="exp9-cart-btn">
Add to Cart
</button>

</div>

</div>

</div>

</div>


{/* PRACTICE EXERCISE 1 */}

<div className="experiment9-card">

<h2 className="experiment9-heading">
Practice Exercise 1
</h2>

<ul className="experiment9-list">

<li>Display loading indicator while fetching data</li>

<li>Handle API fetch errors gracefully</li>

</ul>

<pre className="experiment9-code">
{`const [loading,setLoading] = useState(true);
const [error,setError] = useState("");

useEffect(()=>{

fetch("https://fakestoreapi.com/products")

.then(res => res.json())

.then(data => {
setProducts(data);
setLoading(false);
})

.catch(()=>{
setError("Failed to load products");
});

},[]);`}
</pre>

</div>


{/* PRACTICE EXERCISE 2 */}

<div className="experiment9-card">

<h2 className="experiment9-heading">
Practice Exercise 2
</h2>

<ul className="experiment9-list">

<li>Filter products based on price range</li>

<li>Sort products alphabetically</li>

</ul>

<pre className="experiment9-code">
{`const sortProducts = () => {

const sorted =
[...products].sort((a,b)=>

a.title.localeCompare(b.title)

);

setProducts(sorted);

};

const filterProducts = () => {

const filtered =
products.filter(p => p.price < 100);

setProducts(filtered);

};`}
</pre>

</div>


{/* SAMPLE OUTPUT ADVANCED */}

<div className="experiment9-card">

<h2 className="experiment9-heading">
Sample Output (Advanced)
</h2>

<div className="exp9-output">

<h2 className="exp9-title">
Product List Dashboard
</h2>

{/* CONTROLS */}

<div className="exp9-controls">

<input
type="text"
placeholder="Search products..."
className="exp9-search"
/>

<select className="exp9-sort">

<option>Sort A-Z</option>

<option>Sort Z-A</option>

<option>Price Low → High</option>

<option>Price High → Low</option>

</select>

<button className="exp9-filter-btn">
Price &lt; ₹100
</button>

</div>


{/* PRODUCTS */}

<div className="exp9-products">

{/* PRODUCT 1 */}

<div className="exp9-product-card">

<img
src={jacket1}
alt="Jacket"
className="exp9-product-img"
/>

<h3>Men's Jacket</h3>

<p className="exp9-category">
Category: Clothing
</p>

<p className="exp9-price">
₹55.99
</p>

<p className="exp9-rating">
⭐ 4.5
</p>

<button className="exp9-cart-btn">
Add to Cart
</button>

</div>


{/* PRODUCT 2 */}

<div className="exp9-product-card">

<img
src={necklace1}
alt="Necklace"
className="exp9-product-img"
/>

<h3>Gold Necklace</h3>

<p className="exp9-category">
Category: Jewelry
</p>

<p className="exp9-price">
₹168.00
</p>

<p className="exp9-rating">
⭐ 4.8
</p>

<button className="exp9-cart-btn">
Add to Cart
</button>

</div>


{/* PRODUCT 3 */}

<div className="exp9-product-card">

<img
src={backpack1}
alt="Bag"
className="exp9-product-img"
/>

<h3>Leather Bag</h3>

<p className="exp9-category">
Category: Bags
</p>

<p className="exp9-price">
₹79.99
</p>

<p className="exp9-rating">
⭐ 4.2
</p>

<button className="exp9-cart-btn">
Add to Cart
</button>

</div>

</div>

</div>

</div>


{/* SOURCE CODE */}

<div className="experiment9-card">

<h2 className="experiment9-heading">
Source Code
</h2>

<p className="experiment9-text">
Click below to view the full source code.
</p>

<div className="experiment9-source-container">

<a
href="https://github.com/MADHAN2182006/Experiment9"
target="_blank"
rel="noopener noreferrer"
className="experiment9-source-btn"
>

View Source Code

</a>

</div>

</div>


{/* RESULT */}

<div className="experiment9-result">

<h2 className="experiment9-heading">
Result
</h2>

<p className="experiment9-text">

The Product List Page was successfully implemented using
React functional components and the useEffect hook.
This experiment demonstrates API integration,
side-effect handling, and dynamic rendering of
data in React applications.

</p>

</div>


{/* BACK BUTTON */}

<div className="experiment9-back-container">

<button
className="experiment9-back-btn"
onClick={()=>navigate("/")}

>

← Back to Dashboard

</button>

</div>


</div>

);

}

export default Experiment9;