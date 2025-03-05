// // import React from "react";

// const subscriptions = [
//   {
//     plan: "Basic Plan",
//     price: "₹149/month",
//     features: ["1 Screen", "480p Quality", "Limited Content Access"],
//     buttonText: "Subscribe Now",
//     buttonColor: "#28A745", // Green
//   },
//   {
//     plan: "Standard Plan",
//     price: "₹399/month",
//     features: ["2 Screens", "1080p Quality", "Full Content Library"],
//     buttonText: "Upgrade Now",
//     buttonColor: "#FFC107", // Yellow
//   },
//   {
//     plan: "Premium Plan",
//     price: "₹649/month",
//     features: ["4 Screens", "4K Quality + HDR", "Full Library + Exclusive Content"],
//     buttonText: "Go Premium",
//     buttonColor: "#DC3545", // Red
//   },
// ];

// function PricingPlans() {
//   return (
//     <div style={{ padding: "20px", textAlign: "center", background: "#121212" }}>
//       <h1 style={{ marginBottom: "20px", color: "white", fontFamily: "Arial, sans-serif" }}>
//         Subscribe Now & Start Streaming
//       </h1>
//       <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
//         {subscriptions.map((sub, index) => (
//           <div
//             key={index}
//             style={{
//               border: "1px solid #333",
//               borderRadius: "10px",
//               padding: "20px",
//               width: "300px",
//               textAlign: "left",
//               boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
//               transition: "transform 0.3s ease, box-shadow 0.3s ease",
//             }}
//             onMouseEnter={(e) => {
//               e.currentTarget.style.transform = "scale(1.05)";
//               e.currentTarget.style.boxShadow = "0 6px 16px rgba(0, 0, 0, 0.3)";
//             }}
//             onMouseLeave={(e) => {
//               e.currentTarget.style.transform = "scale(1)";
//               e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.2)";
//             }}
//           >
//             <h3 style={{ color: "white", fontWeight: "bold", fontFamily: "Arial, sans-serif" }}>
//               {sub.plan}
//             </h3>
//             <p
//               style={{
//                 fontSize: "1.5rem",
//                 margin: "10px 0",
//                 fontWeight: "bold",
//                 color: "white",
//                 fontFamily: "Arial, sans-serif",
//               }}
//             >
//               {sub.price}
//             </p>
//             <ul style={{ paddingLeft: "20px", color: "white", fontFamily: "Arial, sans-serif" }}>
//               {sub.features.map((feature, i) => (
//                 <li key={i} style={{ marginBottom: "8px" }}>
//                   {feature}
//                 </li>
//               ))}
//             </ul>
//             <button
//               style={{
//                 padding: "12px",
//                 border: "none",
//                 borderRadius: "5px",
//                 backgroundColor: sub.buttonColor,
//                 color: "#fff",
//                 fontSize: "1rem",
//                 cursor: "pointer",
//                 marginTop: "10px",
//                 width: "100%", // Button stretches to full width
//                 fontWeight: "bold",
//                 transition: "background-color 0.3s ease, transform 0.2s ease",
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.transform = "scale(1.05)";
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.transform = "scale(1)";
//               }}
//             >
//               {sub.buttonText}
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default PricingPlans;
// import React from "react";
// import React from "react";

// const subscriptions = [
//   {
//     plan: "Basic Plan",
//     price: "₹149/month",
//     features: ["1 Screen", "480p Quality", "Limited Content Access"],
//     buttonText: "Subscribe Now",
//     buttonColor: "#28A745", // Green
//     hoverColor: "#218838", // Darker Green on Hover
//   },
//   {
//     plan: "Standard Plan",
//     price: "₹399/month",
//     features: ["2 Screens", "1080p Quality", "Full Content Library"],
//     buttonText: "Upgrade Now",
//     buttonColor: "#FFC107", // Yellow
//     hoverColor: "#E0A800", // Darker Yellow on Hover
//   },
//   {
//     plan: "Premium Plan",
//     price: "₹649/month",
//     features: ["4 Screens", "4K Quality + HDR", "Full Library + Exclusive Content"],
//     buttonText: "Go Premium",
//     buttonColor: "#DC3545", // Red
//     hoverColor: "#C82333", // Darker Red on Hover
//   },
// ];

// function PricingPlans() {
//   return (
//     <div
//       style={{
       
//         padding: "20px",
//         textAlign: "center",
//         background: "#121212",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//         minHeight: "100vh", // Ensures content is vertically centered
       
//       }}
//     >
//       <h1 style={{ marginBottom: "150px", color: "white", fontFamily: "Arial, sans-serif" }}>
//         Subscribe Now  & Start Streaming
//       </h1>
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           gap: "20px",
//           flexWrap: "wrap",
//           maxWidth: "1200px",
//           // Optional: Limit the width for larger screens
//         }}
//       >
//         {subscriptions.map((sub, index) => (
//           <div
//             key={index}
//             style={{
//               border: "1px solid #333",
//               borderRadius: "10px",
//               padding: "20px",
//               width: "300px",
//               textAlign: "left",
//               boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
//               transition: "transform 0.3s ease, box-shadow 0.3s ease",
//             }}
//             onMouseEnter={(e) => {
//               e.currentTarget.style.transform = "scale(1.05)";
//               e.currentTarget.style.boxShadow = "0 6px 16px rgba(0, 0, 0, 0.3)";
//             }}
//             onMouseLeave={(e) => {
//               e.currentTarget.style.transform = "scale(1)";
//               e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.2)";
//             }}
//           >
//             <h3 style={{ color: "white", fontWeight: "bold", fontFamily: "Arial, sans-serif" }}>
//               {sub.plan}
//             </h3>
//             <p
//               style={{
//                 fontSize: "1.5rem",
//                 margin: "10px 0",
//                 fontWeight: "bold",
//                 color: "white",
//                 fontFamily: "Arial, sans-serif",
//                  marginBottom:"40px"
//               }}
//             >
//               {sub.price}
//             </p>
//             <ul style={{ paddingLeft: "20px", color: "white", fontFamily: "Arial, sans-serif" }}>
//               {sub.features.map((feature, i) => (
//                 <li key={i} style={{ marginBottom: "8px" }}>
//                   {feature}
//                 </li>
//               ))}
//             </ul>
//             <button
//               style={{
//                 marginBottom:"40px",
//                 padding: "12px",
//                 border: "none",
//                 borderRadius: "5px",
//                 backgroundColor: sub.buttonColor,
//                 color: "#fff",
//                 fontSize: "1rem",
//                 cursor: "pointer",
//                 marginTop: "10px",
//                 width: "100%", // Button stretches to full width
//                 fontWeight: "bold",
//                 transition: "background-color 0.3s ease, transform 0.2s ease",
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.backgroundColor = sub.hoverColor; // Change background color on hover
//                 e.currentTarget.style.transform = "scale(1.05)";
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.backgroundColor = sub.buttonColor; // Revert to original color
//                 e.currentTarget.style.transform = "scale(1)";
//               }}
//             >
//               {sub.buttonText}
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default PricingPlans;

import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const subscriptions = [
  {
    plan: "Basic Plan",
    price: "₹149/month",
    features: ["1 Screen", "480p Quality", "Limited Content Access"],
    buttonText: "Subscribe Now",
    buttonColor: "#28A745", // Green
    hoverColor: "#218838", // Darker Green on Hover
  },
  {
    plan: "Standard Plan",
    price: "₹399/month",
    features: ["2 Screens", "1080p Quality", "Full Content Library"],
    buttonText: "Upgrade Now",
    buttonColor: "#FFC107", // Yellow
    hoverColor: "#E0A800", // Darker Yellow on Hover
  },
  {
    plan: "Premium Plan",
    price: "₹649/month",
    features: ["4 Screens", "4K Quality + HDR", "Full Library + Exclusive Content"],
    buttonText: "Go Premium",
    buttonColor: "#DC3545", // Red
    hoverColor: "#C82333", // Darker Red on Hover
  },
];

function PricingPlans() {
  const navigate = useNavigate();

  const handlePlanClick = (plan) => {
    // Here you can add validation logic if needed.
    // For example, if the plan is "Basic Plan", we assume it's a free trial option.
    if (plan.plan === "Basic Plan") {
      // Navigate to the free trial payment page
      navigate("/free-trial-payment");
    } else {
      // Navigate to the regular payment page
      navigate("/payment");
    }
  };

  return (
    <div
      style={{
        padding: "20px",
        textAlign: "center",
        background: "#121212",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          marginBottom: "150px",
          color: "white",
          fontFamily: "Arial, sans-serif",
        }}
      >
        Subscribe Now & Start Streaming
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
          maxWidth: "1200px",
        }}
      >
        {subscriptions.map((sub, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #333",
              borderRadius: "10px",
              padding: "20px",
              width: "300px",
              textAlign: "left",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow =
                "0 6px 16px rgba(0, 0, 0, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow =
                "0 4px 12px rgba(0, 0, 0, 0.2)";
            }}
          >
            <h3
              style={{
                color: "white",
                fontWeight: "bold",
                fontFamily: "Arial, sans-serif",
              }}
            >
              {sub.plan}
            </h3>
            <p
              style={{
                fontSize: "1.5rem",
                margin: "10px 0",
                fontWeight: "bold",
                color: "white",
                fontFamily: "Arial, sans-serif",
                marginBottom: "40px",
              }}
            >
              {sub.price}
            </p>
            <ul
              style={{
                paddingLeft: "20px",
                color: "white",
                fontFamily: "Arial, sans-serif",
              }}
            >
              {sub.features.map((feature, i) => (
                <li key={i} style={{ marginBottom: "8px" }}>
                  {feature}
                </li>
              ))}
            </ul>
            <Link to={'/payment'}
            >
            <button
             
              style={{
                marginBottom: "40px",
                padding: "12px",
                border: "none",
                borderRadius: "5px",
                backgroundColor: sub.buttonColor,
                color: "#fff",
                fontSize: "1rem",
                cursor: "pointer",
                marginTop: "10px",
                width: "100%",
                fontWeight: "bold",
                transition:
                  "background-color 0.3s ease, transform 0.2s ease",
              }}
              onClick={() => handlePlanClick(sub)}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = sub.hoverColor;
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = sub.buttonColor;
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              {sub.buttonText}
            </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PricingPlans;
