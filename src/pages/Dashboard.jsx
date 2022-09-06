import React from "react";
import "./Dashboard.css";
// import Card from "./Card"
import DashboardData from "../data/DashboardData"
const Dashboard = () => {
  return (
    <div className="dashboard-content">
      {/* <CustomLink to="/dashboard">Dashboard</CustomLink> */}
      {/* <h1>Dashboard</h1> */}
      {/* <Card/> */}
      <DashboardData/>
      
    </div>
  );
};

export default Dashboard;
