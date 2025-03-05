import React from 'react'
import './Sai.scss'
import { FaRegUserCircle } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { MdSubscriptions } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { TbLogout2 } from "react-icons/tb";
import { FaPlay } from "react-icons/fa";
 
const Sai = () => {
  return (
    <div>
       <div className='container'>  
        <div className='main'>
              <div className="icon">
              <FaRegUserCircle />
              </div>
              <div className='icon2'>
                <h1 style={{color:"red"}}>Welcome Hacker</h1>
               </div>
               <div className="child">
                 <button><FaRegUserCircle /></button>
                 <h5>Jake</h5>
               </div>
               <div className='child2'>
                 <button><FaRegUserCircle /></button>
                 <h5>Krish</h5>
               </div>
               <div className='child3'>
                 <button><FaPlus /></button>
                 <h5>Profile</h5>
               </div>
               
          </div>
          <center />
        <div class="parent">
            <div class="name1">
            <a style={{fontSize:"30px"}}><FaRegUserCircle /></a>
                <h3>Edit profile</h3>
                <c style={{fontSize:"20px"}}><FaPlay /></c>
            </div>
            <br />
            <div class="name2">
            <a style={{fontSize:"30px"}}><MdSubscriptions /></a>
                <h3>Subscription</h3>
                <c style={{fontSize:"20px"}}><FaPlay /></c>
            </div>
            <br />
            <div class="name3">
            <a style={{fontSize:"30px"}}><FaHistory /></a>
                <h3>History</h3>
                <c style={{fontSize:"20px"}}><FaPlay /></c>
            </div>
            <br />
            <div class="name4">
            <a style={{fontSize:"30px"}}><IoSettingsSharp /></a>
                <h3>Account Settings</h3>
                <c style={{fontSize:"20px"}}><FaPlay /></c>
            </div>
            <br />
            <div class="name5">
            <a style={{fontSize:"30px"}}> <TbLogout2 /></a>
                <h3>Log-Out</h3>
                <c style={{fontSize:"20px"}}><FaPlay /></c>
            </div>
            <br />
            <center />
      </div>
     
    </div>
     
    </div>
  )
}
 
export default Sai
 
 
 
 
 