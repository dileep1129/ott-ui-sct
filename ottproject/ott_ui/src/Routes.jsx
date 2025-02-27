import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";


function AppRoutes() {
  return (
    <Router>
     
      <Routes>
        <Route path="/" element={<SignIn/>}/>
        
      </Routes>
    </Router>
  );
}

export default AppRoutes;
