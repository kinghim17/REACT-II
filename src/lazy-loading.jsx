/*
To implement lazy loading with React and react-router-dom, you can use React.
lazy and Suspense to load components only when they are needed.
 This helps in reducing the initial load time of your application by splitting the code into smaller chunks.
 */ 
 import React, { Suspense, lazy } from "react";
 import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
 
 // Lazy load the components
 const HomePage = lazy(() => import("./HomePage"));
 const Dashboard = lazy(() => import("./Dashboard"));
 
 const App = () => {
   return (
     <Router>
       {/* Use Suspense to show a fallback UI while components are loading */}
       <Suspense fallback={<div>Loading...</div>}>
         <Routes>
           <Route path="/" element={<HomePage />} />
           <Route path="/dashboard" element={<Dashboard />} />
         </Routes>
       </Suspense>
     </Router>
   );
 };
 
 export default App;
 // dashboard.jsx
 import React from "react";
import { useNavigate } from "react-router-dom";

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

export default HomePage;
//home-page

import React from "react";
import { useNavigate } from "react-router-dom";

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

export default HomePage;
