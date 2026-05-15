import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cartItems, removeFromCart } = useCart();

  const getPriceNumber = (price) => {
    if (typeof price === "number") return price;
    return Number(String(price).replace(/[₹,]/g, ""));
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + getPriceNumber(item.price),
    0
  );

  const discount = cartItems.length >= 2 ? 1000 : 0;
  const delivery = cartItems.length > 0 ? 99 : 0;
  const total = subtotal - discount + delivery;

  return (
    <div style={{ padding: "40px", minHeight: "100vh", background: "#f8fafc" }}>
      <Link to="/">
        <button style={homeBtn}>← Home</button>
      </Link>

      <h1 style={{ margin: "25px 0" }}>Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <h3>Your cart is empty</h3>
      ) : (
        <div style={cartLayout}>
          <div>
            {cartItems.map((item, index) => (
              <div key={index} style={cartItem}>
                <div>
                  <h3>{item.name}</h3>
                  <p style={{ fontWeight: "800", color: "#2563eb" }}>
                    {item.price}
                  </p>
                </div>

                <button
                  onClick={() => removeFromCart(index)}
                  style={removeBtn}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div style={billBox}>
            <h2>Order Summary</h2>

            <div style={billRow}>
              <span>Selected Products</span>
              <strong>{cartItems.length}</strong>
            </div>

            <div style={billRow}>
              <span>Subtotal</span>
              <strong>₹{subtotal.toLocaleString()}</strong>
            </div>

            <div style={billRow}>
              <span>Coupon Discount</span>
              <strong style={{ color: "green" }}>
                - ₹{discount.toLocaleString()}
              </strong>
            </div>

            <div style={billRow}>
              <span>Delivery Charges</span>
              <strong>₹{delivery}</strong>
            </div>

            <div style={{ margin: "20px 0" }}>
              <label style={{ fontWeight: "800" }}>Coupon Code</label>
              <input
                type="text"
                placeholder="Enter coupon code"
                style={couponInput}
              />
              <button style={applyBtn}>Apply Coupon</button>
            </div>

            <hr />

            <div style={totalRow}>
              <span>Total Payment</span>
              <strong>₹{total.toLocaleString()}</strong>
            </div>

            <Link to="/checkout">
              <button style={checkoutBtn}>Continue to Checkout</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

const homeBtn = {
  padding: "12px 24px",
  background: "#0f172a",
  color: "white",
  border: "none",
  borderRadius: "12px",
  fontWeight: "700",
};

const cartLayout = {
  display: "grid",
  gridTemplateColumns: "2fr 1fr",
  gap: "30px",
};

const cartItem = {
  padding: "20px",
  background: "white",
  marginBottom: "15px",
  borderRadius: "16px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const removeBtn = {
  padding: "12px 22px",
  background: "#dc2626",
  color: "white",
  border: "none",
  borderRadius: "12px",
  fontWeight: "700",
};

const billBox = {
  background: "white",
  padding: "28px",
  borderRadius: "20px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
  height: "fit-content",
};

const billRow = {
  display: "flex",
  justifyContent: "space-between",
  marginTop: "18px",
  color: "#334155",
};

const couponInput = {
  width: "100%",
  padding: "14px",
  borderRadius: "12px",
  border: "1px solid #cbd5e1",
  marginTop: "10px",
  marginBottom: "10px",
};

const applyBtn = {
  width: "100%",
  padding: "13px",
  border: "none",
  borderRadius: "12px",
  background: "#0f172a",
  color: "white",
  fontWeight: "800",
};

const totalRow = {
  display: "flex",
  justifyContent: "space-between",
  fontSize: "22px",
  fontWeight: "900",
  margin: "20px 0",
};

const checkoutBtn = {
  width: "100%",
  padding: "16px",
  border: "none",
  borderRadius: "14px",
  background: "linear-gradient(135deg, #2563eb, #7c3aed)",
  color: "white",
  fontWeight: "900",
  fontSize: "16px",
};

export default Cart;