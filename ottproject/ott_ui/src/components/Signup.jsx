import React, { useState } from 'react';
import CustomRadioButtons from './CustomRadioButton';
import InputField from './InputField';
import CustomButton from './CustomButton';
import { Row, Col } from 'react-bootstrap';
 
function Signup() {
 
  const [selected, setSelected] = useState("create");  
  const [showPassword, setShowPassword] = useState(false);  
  const [formData, setFormData] = useState({
    firstName: "",
    username: "",  
    password: "",
  });
 
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData, e.target.value);
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
  };
 
  const handleRadioChange = (event) => {
    setSelected(event.target.value);
   
  };
 
  const handlePasswordToggle = (e) => {
    setShowPassword(!showPassword);  
  };
 
  const radioOptions = [
    { value: "create", label: "Create account" },
  ];
 
  const showPasswordOptions = [
    { value: "show", label: "Show Password" },
  ];
 
  const signinOptions = [
    { value: "signin", label: "Sign in Already a customer ?" },
  ];
 
  return (
   
   
   
   
      <div className="d-flex justify-content-center align-items-center p-5 main" style={{ overflow: 'hidden',}}>
 
      <div className="w-100" style={{ maxWidth: "500px" }}>
        <div className="text-center mb-4">
          <label><h1 className='fw-bolder'>Welcome</h1></label>
        </div>
        <form onSubmit={handleSubmit}>
          <CustomRadioButtons
            options={radioOptions}
            selectedValue={selected}
            onChange={handleRadioChange}
          />
         
          <Row className="mb-3 fs-4">
            <Col xs={10}>
              <InputField
                type="text"
                name="firstName"
                placeholder="First & last name"
                value={formData.firstName}
                onChange={handleChange}
                minLength={3}
                maxLength={20}
                required
              />
            </Col>
          </Row>
         
          <Row className="mb-3 fs-4">
            <Col xs={10}>
              <InputField
                type="text"
                name="username"  
                placeholder="Mobile number or email"
                value={formData.username}
                onChange={handleChange}
                minLength={10}
                maxLength={20}
                required
              />
            </Col>
            <Row className="mb-3 fs-4"></Row>
            <Col xs={10}>
              <InputField
                type={showPassword ? "text" : "password"}  
                name="password"
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </Col>
          </Row>
         
          <Row className="mb-3">
            <Col xs={10}>
              <CustomRadioButtons
                options={showPasswordOptions}
                selectedValue={showPassword ? "show" : ""}
                onChange={handlePasswordToggle}
              />
            </Col>
          </Row>
 
          <div className="d-flex justify-content-center mb-3">
            <CustomButton className="fw-bolder" label="CONTINUE" type="submit" color="primary"/>
          </div>
 
          <p className="text-center mt-2 fs-5 fw-bolder">By creating an account, you agree to the
            Terms of Use and License Agreement, which can be found on the<br />
            website.
          </p>
         
          {/* { <Row className="mt-4"> 
            <Col xs={12}>
              <CustomRadioButtons
                options={signinOptions}
                selectedValue={selected}
                onChange={handleRadioChange}
              />
            </Col>
          </Row> } */}
        </form>
      </div>
    </div>
   
  );
}
export default Signup