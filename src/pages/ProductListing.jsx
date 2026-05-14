import "../styles/ProductListing.css";

const products = [
  {
    name: "iPhone 15 Pro",
    category: "Mobile",
    price: "₹1,29,999",
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500",
  },
  {
    name: "Sony Alpha Camera",
    category: "Camera",
    price: "₹1,34,999",
    image: "https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?w=500",
  },
  {
    name: "Samsung Smart TV",
    category: "TV",
    price: "₹54,999",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500",
  },
  {
    name: "Apple Watch",
    category: "Watch",
    price: "₹39,999",
    image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=500",
  },
];

function ProductListing() {
  return (
    <section className="marketplace-page">
      <div className="marketplace-header">
        <span>PIXER MARKETPLACE</span>
        <h1>Explore Trending Electronics</h1>
        <p>Find mobiles, cameras, smart TVs, watches and more.</p>
      </div>

      <div className="marketplace-controls">
        <input type="text" placeholder="Search products..." />

        <div className="filter-buttons">
          <button>All</button>
          <button>Mobile</button>
          <button>Camera</button>
          <button>TV</button>
          <button>Watch</button>
        </div>
      </div>

      <div className="marketplace-grid">
        {products.map((product, index) => (
          <div className="market-card" key={index}>
            <img src={product.image} alt={product.name} />
            <div className="market-info">
              <span>{product.category}</span>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <button>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductListing;