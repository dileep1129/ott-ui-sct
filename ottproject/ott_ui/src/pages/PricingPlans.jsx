import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const subscriptions = [
  {
    plan: "Basic Plan",
    price: "₹149/month",
    features: ["1 Screen", "480p Quality", "Limited Content Access"],
    buttonText: "Subscribe Now",
    buttonColor: "#28A745",
    hoverColor: "#218838",
  },
  {
    plan: "Standard Plan",
    price: "₹399/month",
    features: ["2 Screens", "1080p Quality", "Full Content Library"],
    buttonText: "Upgrade Now",
    buttonColor: "#FFC107",
    hoverColor: "#E0A800",
  },
  {
    plan: "Premium Plan",
    price: "₹649/month",
    features: ["4 Screens", "4K Quality + HDR", "Full Library + Exclusive Content"],
    buttonText: "Go Premium",
    buttonColor: "#DC3545",
    hoverColor: "#C82333",
  },
];

function PricingPlans() {
  const navigate = useNavigate();

  const handlePlanClick = (plan) => {
    if (plan.plan === "Basic Plan") {
      navigate("/");
    } else {
      navigate("/payment");
    }
  };

  return (
    <div style={{ background: "#121212", minHeight: "100vh", overflowX: "hidden" }}>
      <NavBar />
      <div
        style={{
          padding: "50px 20px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h4
          style={{
            fontWeight: "bold",
            color: "white",
            fontSize: "3rem",
            marginBottom: "50px",
            fontSize: window.innerWidth <= 480 ? "2rem" : "3rem",
            padding: "0 20px",
            boxSizing: "border-box",
            fontFamily: "Montserrat, sans-serif", // Changed Font
            lineHeight: "1.2",
          }}
        >
          Subscribe Now & Start Streaming
        </h4>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
            maxWidth: "1200px",
            width: "100%",
            boxSizing: "border-box",
            padding: "0 20px",
          }}
        >
          {subscriptions.map((sub, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #333",
                borderRadius: "10px",
                padding: "30px",
                width: "350px",
                textAlign: "left",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                boxSizing: "border-box",
                background: "#1E1E1E",
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
                  paddingLeft:'100px',

                  fontWeight: "600",
                  fontFamily: "Roboto, sans-serif", // Changed Font
                  marginBottom: "20px",
                  fontSize: "1.6rem",
                  lineHeight: "1.3",
                }}
              >
                {sub.plan}
              </h3>
              <p
                style={{
                  fontSize: "1.4rem",
                  marginBottom: "30px",
                  fontWeight: "bold",
                  color: "white",
                  fontFamily: "Roboto, sans-serif", // Changed Font
                  textAlign: "center", // Centered price
                }}
              >
                {sub.price}
              </p>
              <ul
                style={{
                  paddingLeft: "20px",
                  color: "white",
                  fontFamily: "Open Sans, sans-serif", // Changed Font
                  lineHeight: "1.6",
                }}
              >
                {sub.features.map((feature, i) => (
                  <li key={i} style={{ marginBottom: "10px" }}>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link to={"/payment"}>
                <button
                  style={{
                    padding: "12px 20px",
                    border: "none",
                    borderRadius: "5px",
                    backgroundColor: sub.buttonColor,
                    color: "#fff",
                    fontSize: "1rem",
                    cursor: "pointer",
                    marginTop: "30px",
                    width: "100%",
                    fontWeight: "600",
                    transition:
                      "background-color 0.3s ease, transform 0.2s ease",
                    fontFamily: "Roboto, sans-serif",// Changed Font
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
    </div>
  );
}

export default PricingPlans;