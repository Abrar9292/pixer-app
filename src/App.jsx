import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import UserDashboard from "./pages/UserDashboard";
import VendorDashboard from "./pages/VendorDashboard";
import AnalyticsDashboard from "./pages/AnalyticsDashboard";

function App() {
  return (
    <BrowserRouter basename="/pixer-app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/vendor-dashboard" element={<VendorDashboard />} />
        <Route path="/analytics" element={<AnalyticsDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;