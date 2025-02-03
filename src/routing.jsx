import React from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={() => navigate("/")}>Loading Page</button>
      <button onClick={() => navigate("/dashboard")}>Dashboard</button>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={() => alert("Dashboard Button Clicked!")}>
        Perform Action
      </button>
    </div>
  );
};

export default App;
// lazy loading interview question comes from it