import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import SignIn from "./pages/SignIn";
// import NavBar from "./components/NavBar";
import PricingPlans from "./pages/PricingPlans";
// import Categories from "./pages/Categories";
// import Profile from "./pages/Profile";



function AppRoutes() {
  return (
    <Router>
      {/* <NavBar /> */}
      <PricingPlans />
      {/* <Categories /> */}
      {/* <Profile /> */}
   
     {/* <Action /> */}
      <Routes>
        {/* <Route path="/" element={<SignIn/>}/> */}
        <Route Path="/categories"element={<PricingPlans/>} />
        
        
      </Routes>
     {/* <Categories /> */}

    </Router>
  );
}

export default AppRoutes;
