import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {

  const { cartCount } = useCart();

  return (
    <nav className="main-navbar">

      <div className="container-fluid nav-wrapper px-5">

        <div className="brand">
          <div className="brand-logo">P</div>
          <h2>Pixer</h2>
        </div>

        <div className="nav-menu">

          <Link to="/">Home</Link>

          <Link to="/products">
            Products
          </Link>

          <Link to="/user-dashboard">
            User Dashboard
          </Link>

          <Link to="/vendor-dashboard">
            Vendor Dashboard
          </Link>

          <Link to="/analytics">
            Analytics
          </Link>

        </div>

        <div style={{ display: "flex", gap: "10px" }}>

          <a href="#auth">

            <button className="nav-btn">
              Login
            </button>

          </a>

          <Link to="/cart">
            <button className="nav-btn">
              Cart ({cartCount})
            </button>
          </Link>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;