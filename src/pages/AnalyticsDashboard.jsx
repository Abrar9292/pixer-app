import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import "../styles/AnalyticsDashboard.css";

const salesData = [
  { month: "Jan", sales: 4000 },
  { month: "Feb", sales: 7000 },
  { month: "Mar", sales: 5000 },
  { month: "Apr", sales: 9000 },
  { month: "May", sales: 12000 },
];

function AnalyticsDashboard() {
  return (
    <section className="analytics-page">
      <div className="analytics-header">
        <h1>Sales Analytics</h1>
        <p>Track marketplace sales and growth performance.</p>
      </div>

      <div className="analytics-cards">
        <div className="analytics-card">
          <h3>Total Sales</h3>
          <p>₹8.4L</p>
        </div>

        <div className="analytics-card">
          <h3>Total Orders</h3>
          <p>1,240</p>
        </div>

        <div className="analytics-card">
          <h3>Total Revenue</h3>
          <p>₹15.2L</p>
        </div>

        <div className="analytics-card">
          <h3>Growth Rate</h3>
          <p>+28%</p>
        </div>
      </div>

      <div className="chart-container">
        <h2>Monthly Sales Report</h2>

        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={salesData}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="sales" fill="#2563eb" radius={[10, 10, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}

export default AnalyticsDashboard;