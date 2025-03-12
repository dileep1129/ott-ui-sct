import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomRadioButtons from "../components/CustomRadioButton";
import InputField from "../components/InputField";
import CustomButton from "../components/CustomButton";
import { Row, Col } from "react-bootstrap";
import "./Signup.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
 
function Signup() {
  const navigate = useNavigate();
  const signin = useNavigate();
  const [selected, setSelected] = useState("create");
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    username: "",
    password: "",
  });
 
  const [errors, setErrors] = useState({
    firstName: "",
    username: "",
    password: "",
  });
 
  // Validation functions
  const validateName = (name) => /^[A-Za-z\s]+$/.test(name);
  const validateUsername = (input) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input) || /^[0-9]{10}$/.test(input);
  const validatePassword = (password) =>
    /^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/.test(password);
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
 
    let errorMessage = "";
 
    // Show error only if user types incorrect input
    if (name === "firstName" && value !== "" && !validateName(value)) {
      errorMessage = "Only letters and spaces allowed.";
    }
    else if (name === "username" && value !== "" && !validateUsername(value)) {
      errorMessage = "Enter a valid email or 10-digit phone number.";
    }
    else if (name === "password" && value !== "" && !validatePassword(value)) {
      errorMessage = "Password must be at least 6 characters & contain 1 special character.";
    }
 
    setErrors({ ...errors, [name]: errorMessage });
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};
 
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First & Last Name is required.";
    } else if (!validateName(formData.firstName)) {
      newErrors.firstName = "Only letters and spaces allowed.";
    }
 
    if (!formData.username.trim()) {
      newErrors.username = "Mobile number or email is required.";
    } else if (!validateUsername(formData.username)) {
      newErrors.username = "Enter a valid email or 10-digit phone number.";
    }
 
    if (!formData.password.trim()) {
      newErrors.password = "Password is required.";
    } else if (!validatePassword(formData.password)) {
      newErrors.password = "Password must be at least 6 characters & contain 1 special character.";
    }
 
    setErrors(newErrors);
 
    if (Object.keys(newErrors).length === 0) {
      console.log("Submitted Data:", formData);
      navigate("/Login");
    }
  };
 
  return (
    <>
      <div className="header-container">
        {/* <img src={ott1} alt="Logo" className="logo" /> */}
        <button className="signin-button" onClick={() => signin("/Login")}>
          Sign In
        </button>
      </div>
      <div className="cont">
        <div className="d-flex justify-content-center p-5">
          <div className="w-100" style={{ maxWidth: "500px" }}>
            <div className="text-center mb-4">
              <h3>
                <strong>Welcome</strong>
              </h3>
            </div>
            <form onSubmit={handleSubmit}>
              <CustomRadioButtons
                options={[{ value: "create", label: "Create account" }]}
                selectedValue={selected}
                onChange={(e) => setSelected(e.target.value)}
              />
              <Row className="mb-3">
                <Col xs={12}>
                  <InputField
                    type="text"
                    name="firstName"
                    placeholder="First & Last Name"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                  {errors.firstName && <p className="error-text">{errors.firstName}</p>}
                </Col>
              </Row>
              <Row className="mb-3">
                <Col xs={12}>
                  <InputField
                    type="text"
                    name="username"
                    placeholder="Mobile number or email"
                    value={formData.username}
                    onChange={handleChange}
                  />
                  {errors.username && <p className="error-text">{errors.username}</p>}
                </Col>
              </Row>
              <Row className="mb-3">
                <Col xs={12}>
                  <InputField
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Create a password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  {errors.password && <p className="error-text">{errors.password}</p>}
                </Col>
              </Row>
              <div className="d-flex justify-content-center mb-3">
                <CustomButton
                  className="fw-bolder"
                  label="CONTINUE"
                  type="submit"
                  color="primary"
                />
              </div>
              <div className="social-login text-center">
                <p>
                  <strong>Or Signup with</strong>
                </p>
                <div className="social-icons">
                  <a href="https://accounts.google.com">
                    <FontAwesomeIcon icon={faGoogle} className="social-icon google" />
                  </a>
                  <a href="https://facebook.com">
                    <FontAwesomeIcon icon={faFacebook} className="social-icon facebook" />
                  </a>
                  <a href="https://twitter.com">
                    <FontAwesomeIcon icon={faTwitter} className="social-icon twitter" />
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
 
export default Signup;
 