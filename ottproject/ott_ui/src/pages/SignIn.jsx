import React, { useState } from 'react';
import CustomRadioButtons from '../components/CustomRadioButton';
import InputField from '../components/InputField';
import CustomButton from '../components/CustomButton';
import {Row, Col} from 'react-bootstrap';
import { WidthFull } from '@mui/icons-material';


function SignIn() {
  const [selected, setSelected] = useState("create");
  const [formData, setFormData] = useState({
    firstName: "",
    password: "",
    username: "",
    age: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
  };

  const handleRadioChange = (event) => {
    setSelected(event.target.value);
  };

  const radioOptions = [
    { value: "create", label: "Create account" },
    { value: "signin", label: "Sign in Already a customer?" },
  ];

  return (
    <div className='d-flex justify-content-center p-5'>
      <div className=" w-100" style={{ maxWidth: '500px' }}>
        <div className='text-center mb-4'>
          <label><h1>Welcome</h1></label>
        </div>
        <form onSubmit={handleSubmit}>
          <CustomRadioButtons
            options={radioOptions}
            selectedValue={selected}
            onChange={handleRadioChange}
          />
          
          <Row>
            <Col md={6}> 
              <div className="mb-3">
                <InputField
                  type="email or numner"
                  name="username"
                  placeholder="Mobile number or email"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>
            </Col>
          </Row>
          <center>
            <CustomButton label="Continue" type="submit" color="primary" />
          </center>
        </form>
        <center>
          <pre className='mt-4 fw-bolder fs-6'>
            By creating an account, you agree to the <br />
            Terms of use and license agreement which <br />
            can be found on the website.
          </pre>
        </center>
        <p className="text-primary mt-4 fw-bolder fs-5 text-center">Need Help?</p>
      </div>
    </div>
  );
}

export default SignIn;
