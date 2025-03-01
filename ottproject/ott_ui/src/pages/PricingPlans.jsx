// import React from "react";

// const subscriptions = [
//   {
//     plan: "Basic Plan",
//     price: "₹149/month",
//     features: ["1 Screen", "480p Quality", "Limited Content Access"],
//     buttonText: "Subscribe Now",
//   },
//   {
//     plan: "Standard Plan",
//     price: "₹399/month",
//     features: ["2 Screens", "1080p Quality", "Full Content Library"],
//     buttonText: "Upgrade Now",
//   },
//   {
//     plan: "Premium Plan",
//     price: "₹649/month",
//     features: ["4 Screens", "4K Quality + HDR", "Full Library + Exclusive Content"],
//     buttonText: "Go Premium",
//   },
// ];

// function PricingPlans() {
//   return (
//     <div style={{ padding: "20px", textAlign: "center",background:"black" }}>
//       <h1 style={{ marginBottom: "20px" ,color:'white'}}>Subscribe Now & Start Streaming</h1>
//       <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
//         {subscriptions.map((sub, index) => (
//           <div
//             key={index}
//             style={{
//               border: "1px solid #ddd",
//               borderRadius: "10px",
//               padding: "20px",
//               width: "300px",
//               textAlign: "left",
//               boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
//             }}
//           >
//             <h2 style={{ color: "#007BFF" }}>{sub.plan}</h2>
//             <p style={{ fontSize: "1.5rem", margin: "10px 0", fontWeight: "bold" ,color:'white'}}>{sub.price}</p>
//             <ul style={{ paddingLeft: "20px",color:'white' }}>
//               {sub.features.map((feature, i) => (
//                 <li key={i} style={{ marginBottom: "8px" }}>
//                   {feature}
//                 </li>
//               ))}
//             </ul>
//             <button
//               style={{
//                 padding: "10px 10px",
//                 border: "none",
//                 borderRadius: "5px",
//                 backgroundColor: "#007BFF",
//                 color: "#fff",
//                 fontSize: "1rem",
//                 cursor: "pointer",
//                 marginTop: "10px",
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
//     <div style={{ padding: "20px", textAlign: "center", background: "black" }}>
//       <h1 style={{ marginBottom: "20px", color: "white" }}>Subscribe Now & Start Streaming</h1>
//       <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
//         {subscriptions.map((sub, index) => (
//           <div
//             key={index}
//             style={{
//               border: "1px solid #ddd",
//               borderRadius: "10px",
//               padding: "20px",
//               width: "300px",
//               textAlign: "left",
//               boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
//             }}
//           >
//             <h2 style={{ color: "#007BFF" }}>{sub.plan}</h2>
//             <p style={{ fontSize: "1.5rem", margin: "10px 0", fontWeight: "bold", color: "white" }}>
//               {sub.price}
//             </p>
//             <ul style={{ paddingLeft: "20px", color: "white" }}>
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

const subscriptions = [
  {
    plan: "Basic Plan",
    price: "₹149/month",
    features: ["1 Screen", "480p Quality", "Limited Content Access"],
    buttonText: "Subscribe Now",
    buttonColor: "#28A745", // Green
  },
  {
    plan: "Standard Plan",
    price: "₹399/month",
    features: ["2 Screens", "1080p Quality", "Full Content Library"],
    buttonText: "Upgrade Now",
    buttonColor: "#FFC107", // Yellow
  },
  {
    plan: "Premium Plan",
    price: "₹649/month",
    features: ["4 Screens", "4K Quality + HDR", "Full Library + Exclusive Content"],
    buttonText: "Go Premium",
    buttonColor: "#DC3545", // Red
  },
];

function PricingPlans() {
  return (
    <div style={{ padding: "20px", textAlign: "center", background: "black" }}>
      <h1 style={{ marginBottom: "20px", color: "white" }}>Subscribe Now & Start Streaming</h1>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
        {subscriptions.map((sub, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "20px",
              width: "300px",
              textAlign: "left",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
          >
            <h3 style={{ color: "white",fontWeight:"bold" }}>{sub.plan}</h3> {/* Changed to white */}
            <p style={{ fontSize: "1.5rem", margin: "10px 0", fontWeight: "bold", color: "white" }}>
              {sub.price}
            </p>
            <ul style={{ paddingLeft: "20px", color: "white" }}>
              {sub.features.map((feature, i) => (
                <li key={i} style={{ marginBottom: "8px" }}>
                  {feature}
                </li>
              ))}
            </ul>
            <button
              style={{
                padding: "12px",
                border: "none",
                borderRadius: "5px",
                backgroundColor: sub.buttonColor,
                color: "#fff",
                fontSize: "1rem",
                cursor: "pointer",
                marginTop: "10px",
                width: "100%", // Button stretches to full width
                fontWeight: "bold",

              }}
            >
              {sub.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PricingPlans;


