function Navbar() {
  return (
    <nav className="main-navbar">
      <div className="container-fluid nav-wrapper px-5">
        <div className="brand">
          <div className="brand-logo">P</div>
          <h2>Pixer</h2>
        </div>

        <div className="nav-menu">
          <a href="#">Home</a>
          <a href="#">Shop</a>
          <a href="#">Categories</a>
          <a href="#">Deals</a>
          <a href="#">Contact</a>
        </div>

        <button className="nav-btn">Add toCart</button>
      </div>
    </nav>
  );
}

export default Navbar;