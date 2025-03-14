// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// function PaymentPage({ trial }) {
//   const [paymentDetails, setPaymentDetails] = useState({
//     cardNumber: "",
//     expiry: "",
//     cvv: "",
//     name: "",
//     email: "",
//     upiId: "",
//   });
//   const [paymentMethod, setPaymentMethod] = useState("card");

//   const handleChange = (e) => {
//     setPaymentDetails({
//       ...paymentDetails,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(
//       "Payment details submitted:",
//       paymentDetails,
//       "Payment Method:",
//       paymentMethod
//     );
//     alert(
//       trial
//         ? "Free Trial Registered!"
//         : `Payment Processed using ${paymentMethod}!`
//     );
//   };

//   const optionStyle = {
//     padding: "10px 20px",
//     border: "2px solid #fff",
//     borderRadius: "5px",
//     cursor: "pointer",
//     margin: "5px",
//     flex: "1",
//     textAlign: "center",
//     color: "#fff",
//     backgroundColor: "#000",
//   };

//   const selectedStyle = {
//     ...optionStyle,
//     borderColor: "#28A745",
//     backgroundColor: "#333",
//     fontWeight: "bold",
//   };

//   const inputStyle = {
//     width: "100%",
//     padding: "10px",
//     marginTop: "8px",
//     backgroundColor: "#333",
//     color: "#fff",
//     border: "1px solid #555",
//     borderRadius: "4px",
//     boxSizing: "border-box",
//   };

//   return (
//     <div
//       style={{
//         padding: "20px",
//         maxWidth: "500px", // Default maxWidth for laptops
//         width: "90%", // Default width for mobile
//         margin: "20px auto",
//         background: "#000",
//         borderRadius: "10px",
//         boxShadow: "0 4px 8px rgba(255, 255, 255, 0.1)",
//         color: "#fff",
//         // "@media (min-width: 768px)": { // Media query for laptops
//         //   maxWidth: "500px",
//         //   width: "auto" // change back to auto for larger screens.
//         // },
//       }}
//     >
//       <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
//         {trial ? "Free Trial Registration" : "Payment"}
//       </h1>
//       <form
//         onSubmit={handleSubmit}
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           gap: "15px",
//           marginTop: "20px",
//         }}
//       >
//         <label>
//           Full Name:
//           <input
//             type="text"
//             name="name"
//             value={paymentDetails.name}
//             onChange={handleChange}
//             required
//             placeholder="Your Name"
//             style={inputStyle}
//           />
//         </label>

//         {trial ? (
//           <label>
//             Email:
//             <input
//               type="email"
//               name="email"
//               value={paymentDetails.email}
//               onChange={handleChange}
//               required
//               placeholder="you@example.com"
//               style={inputStyle}
//             />
//           </label>
//         ) : (
//           <>
//             <div style={{ margin: "20px 0" }}>
//               <p style={{ marginBottom: "10px", color: "#fff" }}>
//                 Select Payment Method:
//               </p>
//               <div
//                 style={{
//                   display: "flex",
//                   flexWrap: "wrap",
//                   justifyContent: "center",
//                 }}
//               >
//                 <div
//                   style={paymentMethod === "card" ? selectedStyle : optionStyle}
//                   onClick={() => setPaymentMethod("card")}
//                 >
//                   Card
//                 </div>
//                 <div
//                   style={paymentMethod === "phonepay" ? selectedStyle : optionStyle}
//                   onClick={() => setPaymentMethod("phonepay")}
//                 >
//                   PhonePe
//                 </div>
//                 <div
//                   style={paymentMethod === "googlepay" ? selectedStyle : optionStyle}
//                   onClick={() => setPaymentMethod("googlepay")}
//                 >
//                   Google Pay
//                 </div>
//                 <div
//                   style={paymentMethod === "paytm" ? selectedStyle : optionStyle}
//                   onClick={() => setPaymentMethod("paytm")}
//                 >
//                   Paytm
//                 </div>
//               </div>
//             </div>

//             {paymentMethod === "card" ? (
//               <>
//                 <label>
//                   Email:
//                   <input
//                     type="email"
//                     name="email"
//                     value={paymentDetails.email}
//                     onChange={handleChange}
//                     required
//                     placeholder="you@example.com"
//                     style={inputStyle}
//                   />
//                 </label>
//                 <label>
//                   Card Number:
//                   <input
//                     type="text"
//                     name="cardNumber"
//                     value={paymentDetails.cardNumber}
//                     onChange={handleChange}
//                     required
//                     placeholder="1234 5678 9012 3456"
//                     style={inputStyle}
//                   />
//                 </label>
//                 <label>
//                   Expiry Date:
//                   <input
//                     type="text"
//                     name="expiry"
//                     value={paymentDetails.expiry}
//                     onChange={handleChange}
//                     required
//                     placeholder="MM/YY"
//                     style={inputStyle}
//                   />
//                 </label>
//                 <label>
//                   CVV:
//                   <input
//                     type="text"
//                     name="cvv"
//                     value={paymentDetails.cvv}
//                     onChange={handleChange}
//                     required
//                     placeholder="123"
//                     style={inputStyle}
//                   />
//                 </label>
//               </>
//             ) : (
//               <label>
//                 UPI ID:
//                 <input
//                   type="text"
//                   name="upiId"
//                   value={paymentDetails.upiId}
//                   onChange={handleChange}
//                   required
//                   placeholder="yourupi@bank"
//                   style={inputStyle}
//                 />
//               </label>
//             )}
//           </>
//         )}

//         <button
//           type="submit"
//           style={{
//             padding: "12px",
//             border: "none",
//             borderRadius: "5px",
//             backgroundColor: "#28A745",
//             color: "#000",
//             fontSize: "1rem",
//             cursor: "pointer",
//           }}
//         >
//           {trial ? "Register for Free Trial" : "Submit Payment"}
//         </button>
//       </form>
//       <div style={{ textAlign: "center", marginTop: "20px" }}>
//         <Link to="/PricingPlans" style={{ textDecoration: "none", color: "#007BFF" }}>
//           Back to Pricing Plans
//         </Link>
//       </div>
//     </div>
//   );
// }
// export default PaymentPage;

import React, { useState } from "react";
import { Link } from "react-router-dom";
 
function PaymentPage({ trial }) {
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: "",
    expiry: "",
    cvv: "",
    name: "",
    email: "",
    upiId: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("card");
 
  const handleChange = (e) => {
    const { name, value } = e.target;
 
    // Allow only numbers in cardNumber, expiry, and cvv
    if (name === "cardNumber" || name === "cvv") {
      const numericValue = value.replace(/\D/g, ''); // Remove non-digit characters
      setPaymentDetails({
        ...paymentDetails,
        [name]: numericValue,
      });
    }
 
    if (name === "expiry") {
      // Ensure the input is numeric, and format as MM/YY
      const numericValue = value.replace(/\D/g, ''); // Remove non-digit characters
      let formattedValue = numericValue;
 
      // Automatically insert slash after 2 digits for MM/YY format
      if (formattedValue.length >= 2 && formattedValue.length <= 4) {
        formattedValue = `${formattedValue.slice(0, 2)}/${formattedValue.slice(2, 4)}`;
      }
 
      if (formattedValue.length <= 5) { // Only allow MM/YY format
        setPaymentDetails({
          ...paymentDetails,
          [name]: formattedValue,
        });
      }
    } else {
      setPaymentDetails({
        ...paymentDetails,
        [name]: value,
      });
    }
  };
 
  const validateCardNumber = (cardNumber) => {
    return cardNumber.length === 10;
  };
 
  const validateExpiry = (expiry) => {
    const expiryValue = expiry.trim();
 
    // Check if expiry value is exactly 5 characters (MM/YY format)
    if (expiryValue.length !== 5) {
      return false;
    }
 
    // Split the expiry into MM and YY
    const month = expiryValue.slice(0, 2);
    const year = expiryValue.slice(3, 5);
 
    // Validate month (01-12)
    if (parseInt(month) < 1 || parseInt(month) > 12) {
      return false;
    }
 
    // Year validation - we just check if it's a valid two digits year
    if (parseInt(year) < 0 || parseInt(year) > 99) {
      return false;
    }
 
    return true;
  };
 
  const validateCVV = (cvv) => {
    return cvv.length === 3;
  };
 
  const validateUPI = (upiId) => {
    if (paymentMethod === "phonepay") {
      // Validate PhonePe UPI ID (must end with @phonepe)
      const regex = /^[a-zA-Z0-9._%+-]+@phonepe$/;
      return regex.test(upiId);
    } else if (paymentMethod === "googlepay") {
      // Validate Google Pay UPI ID (must end with @gpay)
      const regex = /^[a-zA-Z0-9._%+-]+@gpay$/;
      return regex.test(upiId);
    } else if (paymentMethod === "paytm") {
      // Validate Paytm UPI ID (must end with @paytm)
      const regex = /^[a-zA-Z0-9._%+-]+@paytm$/;
      return regex.test(upiId);
    }
    return true; // Default for card payments
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
 
    // Validate the input fields
    if (paymentMethod === "card") {
      if (!validateCardNumber(paymentDetails.cardNumber)) {
        alert("Card number must be exactly 10 digits.");
        return;
      }
      if (!validateExpiry(paymentDetails.expiry)) {
        alert("Expiry date must be in MM/YY format, with a valid month (01-12).");
        return;
      }
      if (!validateCVV(paymentDetails.cvv)) {
        alert("CVV must be exactly 3 digits.");
        return;
      }
    }
 
    if (paymentMethod !== "card" && !validateUPI(paymentDetails.upiId)) {
      alert("Please enter a valid UPI ID for the selected payment method.");
      return;
    }
 
    console.log("Payment details submitted:", paymentDetails, "Payment Method:", paymentMethod);
    alert(
      trial ? "Free Trial Registered!" : `Payment Processed using ${paymentMethod}!`
    );
  };
 
  const optionStyle = {
    padding: "10px 20px",
    border: "2px solid #fff",
    borderRadius: "5px",
    cursor: "pointer",
    margin: "5px",
    flex: "1",
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#000",
  };
 
  const selectedStyle = {
    ...optionStyle,
    borderColor: "#28A745",
    backgroundColor: "#333",
    fontWeight: "bold",
  };
 
  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginTop: "8px",
    backgroundColor: "#333",
    color: "#fff",
    border: "1px solid #555",
    borderRadius: "4px",
    boxSizing: "border-box",
  };
 
  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "500px", // Default maxWidth for laptops
        width: "90%", // Default width for mobile
        margin: "20px auto",
        background: "#000",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(255, 255, 255, 0.1)",
        color: "#fff",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        {trial ? "Free Trial Registration" : "Payment"}
      </h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          marginTop: "20px",
        }}
      >
        <label>
          Full Name:
          <input
            type="text"
            name="name"
            value={paymentDetails.name}
            onChange={handleChange}
            required
            placeholder="Your Name"
            style={inputStyle}
          />
        </label>
 
        {trial ? (
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={paymentDetails.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
              style={inputStyle}
            />
          </label>
        ) : (
          <>
            <div style={{ margin: "20px 0" }}>
              <p style={{ marginBottom: "10px", color: "#fff" }}>
                Select Payment Method:
              </p>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                <div
                  style={paymentMethod === "card" ? selectedStyle : optionStyle}
                  onClick={() => setPaymentMethod("card")}
                >
                  Card
                </div>
                <div
                  style={paymentMethod === "phonepay" ? selectedStyle : optionStyle}
                  onClick={() => setPaymentMethod("phonepay")}
                >
                  PhonePe
                </div>
                <div
                  style={paymentMethod === "googlepay" ? selectedStyle : optionStyle}
                  onClick={() => setPaymentMethod("googlepay")}
                >
                  Google Pay
                </div>
                <div
                  style={paymentMethod === "paytm" ? selectedStyle : optionStyle}
                  onClick={() => setPaymentMethod("paytm")}
                >
                  Paytm
                </div>
              </div>
            </div>
 
            {paymentMethod === "card" ? (
              <>
                <label>
                  Card Number:
                  <input
                    type="text"
                    name="cardNumber"
                    value={paymentDetails.cardNumber}
                    onChange={handleChange}
                    required
                    placeholder="1234 5678 9012 3456"
                    style={inputStyle}
                    maxLength="10" // Allow exactly 10 digits
                  />
                </label>
                <label>
                  Expiry Date (MM/YY):
                  <input
                    type="text"
                    name="expiry"
                    value={paymentDetails.expiry}
                    onChange={handleChange}
                    required
                    placeholder="MM/YY"
                    style={inputStyle}
                    maxLength="5" // For MM/YY format
                  />
                </label>
                <label>
                  CVV:
                  <input
                    type="text"
                    name="cvv"
                    value={paymentDetails.cvv}
                    onChange={handleChange}
                    required
                    placeholder="123"
                    style={inputStyle}
                    maxLength="3"
                  />
                </label>
              </>
            ) : (
              <label>
                UPI ID:
                <input
                  type="text"
                  name="upiId"
                  value={paymentDetails.upiId}
                  onChange={handleChange}
                  required
                  placeholder="yourupi@phonepe"
                  style={inputStyle}
                />
              </label>
            )}
          </>
        )}
 
        <button
          type="submit"
          style={{
            padding: "12px",
            border: "none",
            borderRadius: "5px",
            backgroundColor: "#28A745",
            color: "#000",
            fontSize: "1rem",
            cursor: "pointer",
          }}
        >
          {trial ? "Register for Free Trial" : "Submit Payment"}
        </button>
      </form>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Link to="/PricingPlans" style={{ textDecoration: "none", color: "#007BFF" }}>
          Back to Pricing Plans
        </Link>
      </div>
    </div>
  );
}
 
export default PaymentPage;
 