import React from "react";
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
 
const Profile = () => {
  const styles = {
    container: {
      minHeight: "100vh",
      backgroundColor: "#000",
      color: "#fff",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "20px",
      fontFamily: "Arial, sans-serif",
    },
    header: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "20px",
    },
    userInfo: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },
    avatar: {
      width: "50px",
      height: "50px",
      backgroundColor: "#007bff",
      borderRadius: "50%",
    },
    profileSwitcher: {
      display: "flex",
      gap: "10px",
    },
    profileBox: (bgColor) => ({
      width: "40px",
      height: "40px",
      backgroundColor: bgColor,
      borderRadius: "8px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "14px",
      fontWeight: "bold",
      color: "#fff",
    }),
    menu: {
      width: "100%",
      maxWidth: "400px",
    },
    menuButton: {
      width: "100%",
      height:"50px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "#222",
      padding: "15px",
      borderRadius: "10px",
      marginBottom: "10px",
      fontSize: "16px",
      cursor: "pointer",
      border: "none",
      color: "#fff",
      transition: "background 0.3s",
    },
    buttonHover: {
      backgroundColor: "#333",
    },
    icon:{
      alignitems:"center",
      justifyContent:"center",
    },
 
  };
 
  const menuItems = [
    { name: "Edit Profile", icon: "👤" },
    { name: "Subscription Plan", icon: "💳" },
    { name: "History", icon: "📅" },
    { name: "Account Settings", icon: "⚙️" },
    { name: "Sign Out", icon: "↩️" },
  ];
 
  return (
<div style={styles.container}>
      {/* Profile Section */}
<div style={styles.header}>
<div style={styles.userInfo}>
<div className="icon" style={styles.avatar}><i class="fa-solid fa-user"></i></div>
<h1>Welcome Hacker</h1>
</div>
 
        {/* Profile Switcher */}
<div style={styles.profileSwitcher}>
<div style={styles.profileBox("#6a5acd")}>👤</div><h5>Jack</h5>

<div style={styles.profileBox("#6a5acd")}>👤</div><h5>Jack</h5>

<div style={styles.profileBox("#555")}>+</div><h5>Add Profile</h5>
</div>
</div>
 
      {/* Menu Buttons */}
<div style={styles.menu}>
        {menuItems.map((item, index) => (
<button
            key={index}
            style={styles.menuButton}
            onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
            onMouseOut={(e) => (e.target.style.backgroundColor = styles.menuButton.backgroundColor)}
>
<span>{item.icon} {item.name}</span>
<span>▶</span>
</button>
        ))}
</div>
</div>
  );
};
 
export default Profile