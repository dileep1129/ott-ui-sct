import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//  import SignIn from "./pages/SignIn";
//  import Main from"./src/pages/Main";
//  import Profile from "./components/Profile";
import Sai from "./pages/Sai";



function AppRoutes() {
  return (
    <Router>
      {/* <Main /> */}
      {/* <Sai /> */}
     
      <Routes>
        {/* {<Route path="/" element={<SignIn/>}/>} */}
        {/* {<Route path="/" element={<Main/>}/>} */}
        {/* {<Route path="/" element={<Sai/>}/>} */}
        
      </Routes>
    </Router>
  );
}

export default AppRoutes;
