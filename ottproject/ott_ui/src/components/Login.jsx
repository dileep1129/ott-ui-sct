import React, { useState } from 'react';
import CustomRadioButtons from '../components/CustomRadioButton';
import InputField from '../components/InputField';
import CustomButton from '../components/CustomButton';
import { Row, Col } from 'react-bootstrap';
 
function Login() {
 
  const [selected, setSelected] = useState("login");  
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
    { value: "signin", label: "Sign In Already a Customer?" },
 
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
          <Row className="mb-3 mt-4 fs-5">
            <Col xs={12}>
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
            </Row>
          <div className="d-flex justify-content-center mb-3">
            <CustomButton className="fw-bolder" label="CONTINUE" type="submit" color="primary"/>
          </div>
          <p className="text-center mt-2 fs-5 fw-bolder">By creating an account, you agree to the
            Terms of Use and License Agreement, which can be found on the website.
          </p>
          <h4 className='mt-4 blue fw-bolder'>Need Help?</h4>        
        </form>
      </div>
    </div>
   
  );
}
 
export default Login;