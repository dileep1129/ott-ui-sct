import './App.scss';
import { useState } from 'react';
import InputField from './components/InputField';
import NavBar from './components/NavBar';
import CustomButton from './components/CustomButton';
import AppRoutes from './Routes';
// import Profile from './components/Profile';
import Content from "./components/Content";
import Recommended from './components/Recommended';
import Topmovies from './components/Topmovies';
// import Cont from './components/Cont';
// import Recom from "./components/Recommended"
// import Top from"./components/Topmovies"
// import Content from"./components/Seri"
import EpisodeDetails from './Episode';
// import Video from './components/Video';
import Signinn from './components/Signin';
import Signup from './components/Signup';
// import Profile from './components/Profile';
import Viode from './components/Viode';
import Sai from './pages/Sai';
import TVShows from "./components/TVShows"
import Movie from "./components/Movie"
import Profile from './components/Profile';

function App() {
  
return (
  <div>
  
  {/* <NavBar />
   <form onSubmit={handleSubmit}>
        <InputField
            label="Email"
            type="email"
            name="email"
            placeholder="email"
            value={formData.email}
            onChange={handleChange}
            required
        />
        <InputField
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
        />
        <InputField
            label="Username"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            minLength={3}
            maxLength={20}
        />
        <InputField
            label="Age"
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
        />
        <CustomButton label="Submit Form" type="submit" color="success" />
    </form> */}
    {/* <Profile /> */}
    
     {/* <Content />
    <Recommended /> 
     <Topmovies />  */}
     {/* <Signinn />
     <Viode /> */}
    {/* <Cont />
    <Recom />
    <Top /> */}
     {/* <Content /> */}
    {/* <EpisodeDetails /> 
    <Recommended />
    <Signup /> */}
    <TVShows />
    <Movie />
    <Profile />
   
   
    {/* <Video /> */}
    {/* <AppRoutes /> */}
    {/* <NavBar/> */}
    {/* <Profile /> */}
    {/* <Sai /> */}
  </div>
   
);
};




export default App;
