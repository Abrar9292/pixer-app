import { HashRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import Home from "./pages/Home";
import ProtectedRoute from "./routes/ProtectedRoute";
import { CartProvider } from "./context/CartContext";

const ProductListing = lazy(() => import("./pages/ProductListing"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));
const UserDashboard = lazy(() => import("./pages/UserDashboard"));
const VendorDashboard = lazy(() => import("./pages/VendorDashboard"));
const AnalyticsDashboard = lazy(() => import("./pages/AnalyticsDashboard"));
const ApiProducts = lazy(() => import("./pages/ProductApi"));
const Cart = lazy(() => import("./pages/Cart"));
const Checkout = lazy(() => import("./pages/Checkout"));
const Payment = lazy(() => import("./pages/Payment"));

function App() {
  return (
    <CartProvider>
      <HashRouter>
        <Suspense fallback={<h1 style={{ padding: "40px" }}>Loading...</h1>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductListing />} />
            <Route path="/product-details" element={<ProductDetails />} />
            <Route path="/api-products" element={<ApiProducts />} />
            <Route path="/cart" element={<Cart />} />

            <Route path="/checkout" element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
            <Route path="/payment" element={<ProtectedRoute><Payment /></ProtectedRoute>} />
            <Route path="/user-dashboard" element={<ProtectedRoute><UserDashboard /></ProtectedRoute>} />
            <Route path="/vendor-dashboard" element={<ProtectedRoute><VendorDashboard /></ProtectedRoute>} />
            <Route path="/analytics" element={<ProtectedRoute><AnalyticsDashboard /></ProtectedRoute>} />
          </Routes>
        </Suspense>
      </HashRouter>
    </CartProvider>
  );
}

export default App;