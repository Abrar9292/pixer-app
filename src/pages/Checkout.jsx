import { Link } from "react-router-dom";


function Checkout() {

  return (

    <div
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        padding: "40px",
      }}
    >

      <Link to="/">
        <button
          style={{
            padding: "12px 24px",
            background: "#0f172a",
            color: "white",
            border: "none",
            borderRadius: "12px",
            fontWeight: "700",
            marginBottom: "30px",
          }}
        >
          ← Home
        </button>
      </Link>

      <div
        style={{
          maxWidth: "700px",
          margin: "auto",
          background: "white",
          padding: "40px",
          borderRadius: "24px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        }}
      >

        <h1 style={{ marginBottom: "30px" }}>
          Checkout
        </h1>

        <form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >

          <input
            type="text"
            placeholder="Full Name"
            style={inputStyle}
          />

          <input
            type="email"
            placeholder="Email Address"
            style={inputStyle}
          />

          <input
            type="text"
            placeholder="Phone Number"
            style={inputStyle}
          />

          <textarea
            placeholder="Delivery Address"
            style={{
              ...inputStyle,
              height: "120px",
            }}
          />

        <Link to="/payment">
            <button
                type="button"
                style={{
                width: "100%",
                padding: "16px",
                background: "#2563eb",
                color: "white",
                border: "none",
                borderRadius: "14px",
                fontWeight: "800",
                fontSize: "16px",
                }}
                >
                Proceed to Payment
            </button>
        </Link>

        </form>

      </div>

    </div>

  );
}

const inputStyle = {
  padding: "16px",
  borderRadius: "12px",
  border: "1px solid #cbd5e1",
  fontSize: "15px",
};

export default Checkout;