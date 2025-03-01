import './App.scss';
import { useState } from 'react';
import InputField from './components/InputField';
import CustomButton from './components/CustomButton';
import AppRoutes from './Routes';
import NavBar from './components/NavBar';
import Categories from './pages/Categories';



function App() {
  
return (
  <div>
   <NavBar />
 
 
   {/* <form onSubmit={handleSubmit}>
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
    {/* <AppRoutes /> */}
    {/* <NavBar /> */}
    {/* <Profile /> */}
    {/* <PricingPlans /> */}
  
     <Categories/>  
    <AppRoutes/>
  </div>
   
);
};



export default App;
