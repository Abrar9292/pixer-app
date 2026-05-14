import { Link } from "react-router-dom";


function Navbar() {
  return (
    <nav className="main-navbar">
      <div className="container-fluid nav-wrapper px-5">
        <div className="brand">
          <div className="brand-logo">P</div>
          <h2>Pixer</h2>
        </div>

        <div className="nav-menu">

          <Link to="/">Home</Link>
          <Link to="/#products">Products</Link>

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
        <a href="#auth">
            <button className="nav-btn">Login</button>
            <button className="nav-btn">Add toCart</button>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;