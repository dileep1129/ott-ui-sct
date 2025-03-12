import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
// import NavBar from './components/NavBar';
import Signup from './pages/Signup';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import OtpVerification from './pages/OtpVerification';
import ResetPassword from './pages/ResetPassword';
// import FirstPage from './components/FirstPage';
import Action from './components/Action';
import Anime from './components/Anime';
import Comedy from './components/Comedy';
import Documentary from './components/Documentary';
import Drama from './components/Drama';
import Horror from './components/Horror';
import Kids from './components/Kids';
import PaymentPage from './pages/Payments';
import User from './components/User';
import Home from './components/Home';
import Movie from './components/Movie';
import TVshows from './components/TvShows';
import Categories from './components/Categories';
import PricingPlans from './pages/PricingPlans';
import LiveTV from './components/LiveTV';
import LandingPage from './pages/LandingPage';
import EditProfile from "./components/EditProfile"
import History from './components/History';
import AccountSettings from './components/AccountSettings';
import DownloadPage from './components/DownloadPage';
import SignOutPage from './components/SignOut';
import Profile from './components/AddProfile';
import VideoPlayer from './components/VideoPlayer'; 

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Handle login
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    navigate('/Home') 
  };
// Redirect to home or dashboard after login
  return (
    <div>
      {/* {isLoggedIn && <NavBar />}  */}
      <Routes>
            <Route path="/" element={<LandingPage />} />
            {/* <Route path="/" element={isLoggedIn ? <FirstPage /> : <Signup />} /> */}
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login onLoginSuccess={handleLoginSuccess} />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/otp-verification" element={<OtpVerification />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/movie" element={<Movie />} />
            <Route path="/TvShows" element={<TVshows />} />
            <Route path="/LiveTV" element={<LiveTV/>}/>
            {/* <Route path="/live-tv" element={<LiveTV />} /> */}
              {/* <Route path="/Signup" element={<Signup />} /> */}
              <Route path="/signup" element={<Signup />} />
               <Route path="/Login" element={<Login />} />
               <Route path="/PricingPlans" element={<PricingPlans />} />
               <Route path="/Categories" element={<Categories />} />                
              <Route path="/Action" element={<Action/>} />
             <Route path="/Anime"  element={<Anime />} />
             <Route path="/Comedy"  element={<Comedy />} />
            <Route path="/Documentary"  element={<Documentary/>} />
             <Route path="/Drama"  element={<Drama />} />
             <Route path="/Horror"  element={<Horror />} />                      
             <Route path="/Kids"  element={<Kids />} />
             <Route path="/payment"  element={<PaymentPage />} />
              <Route path="/User"  element={<User />} />
              <Route path="/edit-profile"  element={<EditProfile />} />
              <Route path="/history"  element={<History />} />
              <Route path="/account-settings"  element={<AccountSettings />} />
              <Route path="/download"  element={<DownloadPage />} />
              <Route path="/signout"  element={<SignOutPage/>} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/VideoPlayer" element={<VideoPlayer />} />
              
      </Routes>
    </div>
  );
}

export default App;
