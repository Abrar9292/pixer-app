import { Link } from "react-router-dom";

function Payment() {
  return (
    <div style={{ minHeight: "100vh", background: "#f8fafc", padding: "40px" }}>
      <Link to="/">
        <button style={homeBtn}>← Home</button>
      </Link>

      <div style={paymentBox}>
        <h1 style={{ marginBottom: "10px" }}>Payment Method</h1>

        <p style={{ color: "#64748b", marginBottom: "30px" }}>
          Select your preferred payment option to complete your order.
        </p>

        <div style={{ display: "grid", gap: "18px" }}>
          <label style={paymentCardStyle}>
            <input type="radio" name="payment" defaultChecked />
            <span> Credit / Debit Card</span>
          </label>

          <label style={paymentCardStyle}>
            <input type="radio" name="payment" />
            <span> UPI Payment</span>
          </label>

          <label style={paymentCardStyle}>
            <input type="radio" name="payment" />
            <span> Net Banking</span>
          </label>

          <label style={paymentCardStyle}>
            <input type="radio" name="payment" />
            <span> Cash on Delivery</span>
          </label>
        </div>

        <div style={{ marginTop: "30px" }}>
          <input type="text" placeholder="Card Holder Name" style={inputStyle} />
          <input type="text" placeholder="Card Number" style={inputStyle} />

          <div style={{ display: "flex", gap: "15px" }}>
            <input type="text" placeholder="MM/YY" style={inputStyle} />
            <input type="password" placeholder="CVV" style={inputStyle} />
          </div>
        </div>

        <button
          onClick={() => alert("Payment completed successfully")}
          style={payBtn}
        >
          Pay Now
        </button>
      </div>
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
  marginBottom: "30px",
};

const paymentBox = {
  maxWidth: "750px",
  margin: "auto",
  background: "white",
  padding: "40px",
  borderRadius: "24px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
};

const paymentCardStyle = {
  padding: "18px",
  border: "1px solid #cbd5e1",
  borderRadius: "14px",
  fontWeight: "700",
  background: "#f8fafc",
};

const inputStyle = {
  width: "100%",
  padding: "15px",
  marginBottom: "15px",
  borderRadius: "12px",
  border: "1px solid #cbd5e1",
  fontSize: "15px",
};

const payBtn = {
  width: "100%",
  marginTop: "25px",
  padding: "16px",
  background: "linear-gradient(135deg, #2563eb, #7c3aed)",
  color: "white",
  border: "none",
  borderRadius: "14px",
  fontWeight: "800",
  fontSize: "16px",
};

export default Payment;