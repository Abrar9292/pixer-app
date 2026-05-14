import "../styles/VendorDashboard.css";

function VendorDashboard() {
  return (
    <section className="vendor-page">
      <aside className="vendor-sidebar">
        <h2>Pixer Vendor</h2>

        <nav>
          <a href="/">Dashboard</a>
          <a href="/">Products</a>
          <a href="/">Orders</a>
          <a href="/">Analytics</a>
          <a href="/">Settings</a>
        </nav>
      </aside>

      <main className="vendor-main">
        <div className="vendor-header">
          <h1>Vendor Dashboard</h1>
          <p>Manage your products and sales performance.</p>
        </div>

        <div className="vendor-cards">
          <div className="vendor-card">
            <h3>Total Products</h3>
            <p>48</p>
          </div>

          <div className="vendor-card">
            <h3>Total Orders</h3>
            <p>120</p>
          </div>

          <div className="vendor-card">
            <h3>Total Earnings</h3>
            <p>₹4.5L</p>
          </div>
        </div>

        <div className="upload-section">
          <h2>Upload New Product</h2>

          <form className="upload-form">
            <input type="text" placeholder="Product Name" />

            <input type="text" placeholder="Category" />

            <input type="text" placeholder="Price" />

            <textarea placeholder="Product Description"></textarea>

            <button type="submit">
              Upload Product
            </button>
          </form>
        </div>
      </main>
    </section>
  );
}

export default VendorDashboard;