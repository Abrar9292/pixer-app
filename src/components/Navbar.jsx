function Navbar() {
  return (
    <nav className="main-navbar">
      <div className="container-fluid nav-wrapper px-5">
        <div className="brand">
          <div className="brand-logo">P</div>
          <h2>Pixer</h2>
        </div>

        <div className="nav-menu">
            <a href="#home">Home</a>

            <a href="#products">Shop</a>

            <a href="#products">Categories</a>

            <a href="#products">Deals</a>

        <a href="#contact">Contact</a>
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