// import React from 'react'
// import "./Profile.scss"

// import CustomButton from '../components/CustomButton';
// function Profile() {
// return (
// <div>
// <section>
// <div className="img">
// <div className="img1">
// {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp8QtXJ8qqk50gxhJeoPHhB4LWP2SdVkUMeA&s" alt="" /> */}
// <h1>RamCharan</h1>
// <p>Ram Nandan successfully clears the UPSC exam to become a District Magistrate and is posted to Visakhapatnam, Andhra Pradesh. However, on his way to his posting, he is attacked by a gang sent by his former college rival, "Sand" Simha, who is involved in illegal sand mining under the protection of Minister Bobbili Mopidevi.</p>
// <div className='buttons'>
// <CustomButton label="Watch Trailer" color='primary' ></CustomButton>
// <CustomButton label="Watch Later" color='dark'></CustomButton>
// <CustomButton label="Season" color='success'></CustomButton>
// <CustomButton label="Sort" color='white'></CustomButton>
// </div>
// </div>

// <h2>Recommended Content</h2>
// <h6>See All</h6>
// </div>
 

// </section>
// </div>
// )
// }
 
// export default Profile;
// import React from 'react'
//  import './Profile.scss'
// import { FaRegUserCircle } from "react-icons/fa";
// import { FaPlus } from "react-icons/fa";
// import { FaPen } from "react-icons/fa";
// import { MdOutlineSubscriptions } from "react-icons/md";
// import { MdOutlineHistoryEdu } from "react-icons/md";
// import { IoSettingsSharp } from "react-icons/io5";
// import { IoLogOutSharp } from "react-icons/io5";
// import { BiSolidRightArrow } from "react-icons/bi";
// import CustomButton from '../components/CustomButton';
 
// const Profile = () => {
//   return (
//     <div>
//        <div className='container'>
//         <div className='main'>
//               <div className="icon">
//               <FaRegUserCircle />
//               </div>
//               <div className='icon2'>
//                 <h1 style={{color:"red"}}>Welcome Hacker</h1>
//                </div>
//                <div className="child">
//                  <button><FaRegUserCircle /></button>
//                  <h5>Dawood</h5>
//                </div>
//                <div className='child2'>
//                  <button><FaRegUserCircle /></button>
//                  <h5>Basha</h5>
//                </div>
//                <div className='child3'>
//                  <button><FaPlus /></button>
//                  <h5>Profile</h5>
//                </div>
               
//           </div>
//           <center />
//           <CustomButton>hai</CustomButton>
//         <div class="parent">
//             <div class="user1">
//               <CustomButton> <FaPen />
//                 <h3>Edit profile</h3>
//                 <BiSolidRightArrow /></CustomButton>
           
//             </div>
//             <br />
//             <div class="user2">
//             <MdOutlineSubscriptions />
//                 <h3>Subscription</h3>
//                 <BiSolidRightArrow />
//             </div>
//             <br />
//             <div class="user3">
//             <MdOutlineHistoryEdu />
//                 <h3>History</h3>
//                 <BiSolidRightArrow />
//             </div>
//             <br />
//             <div class="user4">
//             <IoSettingsSharp />
//                 <h3>Account Settings</h3>
//                 <BiSolidRightArrow />
//             </div>
//             <br />
//             <div class="user5">
//             <IoLogOutSharp />
//                 <h3>Log-Out</h3>
//                 <BiSolidRightArrow />
//             </div>
//             <br />
//             <center />
//       </div>
     
//     </div>
     
//     </div>
//   )
// }
 
// export default Profile;
 
import React from 'react';
import "./Profile.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPlus, faPen, faScroll, faH, faGear, faSignOutAlt, faPlay } from '@fortawesome/free-solid-svg-icons';
 
function Profile() {
  return (
    <div>
      <div className="icon-circle">
        {/* Using FontAwesomeIcon component */}
          <h2> <FontAwesomeIcon icon={faUser} /></h2>
          <h2 className="welcome-text">Welcome</h2>
          <div className="icon-row">
             <div className="icon user-one">
                 <FontAwesomeIcon icon={faUser} />
             </div>
             <div className="icon user-two">
                 <FontAwesomeIcon icon={faUser} />
             </div>
             <div className="icon plus">
                 <FontAwesomeIcon icon={faPlus} />
             </div>
          </div>
        </div>
          <div className="container" style={{ marginTop: '20px' }}>
           <br />
           <br/>
           <div className="item">
              <FontAwesomeIcon icon={faPen} /> Edit Profile <FontAwesomeIcon icon={faPlay} />
           </div>
           <div className="item">
              <FontAwesomeIcon icon={faScroll} /> Subscription Plan <FontAwesomeIcon icon={faPlay} />
           </div>
           <div className="item">
               <FontAwesomeIcon icon={faH} /> History <FontAwesomeIcon icon={faPlay} />
           </div>
           <div className="item">
               <FontAwesomeIcon icon={faGear} /> Account Settings <FontAwesomeIcon icon={faPlay} />
           </div>
           <div className="item">
               <FontAwesomeIcon icon={faSignOutAlt} /> Sign Out <FontAwesomeIcon icon={faPlay} />
           </div>
         </div>
    </div>
  );
}
 
export default Profile;
 
 