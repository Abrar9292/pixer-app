import "../styles/ProductDetails.css";

function ProductDetails() {
  return (
    <section className="details-page">
      <div className="details-container">
        <div className="details-image">
          <img
            src="https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=700"
            alt="iPhone 15 Pro"
          />
        </div>

        <div className="details-content">
          <span className="details-category">Mobile</span>

          <h1>iPhone 15 Pro</h1>

          <p className="details-price">₹1,29,999</p>

          <p className="details-desc">
            Experience next-level performance with a premium titanium design,
            advanced camera system, powerful processor and all-day battery life.
          </p>

          <div className="details-actions">
            <button>Add to Cart</button>
            <button className="buy-btn">Buy Now</button>
          </div>

          <div className="details-info">
            <p>✔ Free delivery available</p>
            <p>✔ 7 days replacement policy</p>
            <p>✔ Secure payment support</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;