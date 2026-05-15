import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (!isLoggedIn) {
    alert("Please login first");
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;