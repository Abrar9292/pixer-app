import "../styles/UserDashboard.css";

function UserDashboard() {
  return (
    <section className="dashboard-page">
      <aside className="dashboard-sidebar">
        <h2>Pixer</h2>

        <nav>
          <a href="/">Dashboard</a>
          <a href="/">Orders</a>
          <a href="/">Wishlist</a>
          <a href="/">Downloads</a>
          <a href="/">Profile</a>
        </nav>
      </aside>

      <main className="dashboard-main">
        <div className="dashboard-header">
          <h1>User Dashboard</h1>
          <p>Welcome back to your Pixer account.</p>
        </div>

        <div className="stats-grid">
          <div className="stats-card">
            <h3>Total Orders</h3>
            <p>24</p>
          </div>

          <div className="stats-card">
            <h3>Wishlist</h3>
            <p>12</p>
          </div>

          <div className="stats-card">
            <h3>Downloads</h3>
            <p>08</p>
          </div>

          <div className="stats-card">
            <h3>Cart Items</h3>
            <p>05</p>
          </div>
        </div>

        <div className="recent-orders">
          <h2>Recent Orders</h2>

          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Date</th>
                <th>Status</th>
                <th>Price</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>iPhone 15 Pro</td>
                <td>12 Sep 2026</td>
                <td>Delivered</td>
                <td>₹1,29,999</td>
              </tr>

              <tr>
                <td>Apple Watch</td>
                <td>15 Sep 2026</td>
                <td>Processing</td>
                <td>₹39,999</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </section>
  );
}

export default UserDashboard;