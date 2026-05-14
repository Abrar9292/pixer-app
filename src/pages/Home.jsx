import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import "../styles/Home.css";
import Login from "./Login";
import Register from "./Register";

const products = [
  {
    name: "iPhone 15 Pro",
    price: "₹1,29,999",
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500",
  },
  {
    name: "Canon EOS Camera",
    price: "₹45,999",
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500",
  },
  {
    name: "Samsung Smart TV",
    price: "₹54,999",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500",
  },
  {
    name: "Apple Watch",
    price: "₹39,999",
    image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=500",
  },
  {
    name: "Sony Headphones",
    price: "₹14,999",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
  },
  {
    name: "Gaming Laptop",
    price: "₹89,999",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
  },
];

function Home() {
  return (
    <>
      <Navbar />

      <section id="home" className="hero-section">
        <div className="container-fluid hero-content">
          <div className="hero-text">
            <span className="tagline">PIXER Marketplace STORE</span>

            <h1>
                 WelCome TO Pixer Marketplace<br />
            </h1>

            <p>
                Discover mobiles, smart TVs, cameras, watches, headphones and laptops
                designed to upgrade your everyday digital lifestyle.
            </p>

            <Link to="/products">
              <button className="primary-btn">
                Shop Now
              </button>
            </Link>
          </div>

          <div className="hero-card">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600"
              alt="Electronics"
            />
          </div>
        </div>
      </section>

      <section id="products" className="products-section">
        <div className="container-fluid">
          <span className="section-tag">TOP PRODUCTS</span>
          <h2>Trending Electronics</h2>

          <div className="product-grid">
            {products.map((product, index) => (
              <div className="product-card" key={index}>
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p className="price">{product.price}</p>
                
                <Link to="/product-details">
                  <button>Add to Cart</button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="auth" style={{ display: "flex", gap: "140px", padding: "120px" }}>
        <Login />
            <Register />
        </section>

      <Footer />
    </>
  );
}

export default Home;