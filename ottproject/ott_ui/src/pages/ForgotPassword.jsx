import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from '../components/InputField';
import CustomButton from '../components/CustomButton';
 
function ForgotPassword() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email submitted:', email);
     navigate('/otp-verification', { state: { email } });
    };
 
    return (
        <div className="d-flex justify-content-center align-items-center p-5">
            <div className="w-100" style={{ maxWidth: '400px' }}>
                <h1 className="text-center mb-4">Forgot Password</h1>
                <form onSubmit={handleSubmit}>
                    <InputField
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <div className="d-flex justify-content-center mt-3">
                        <CustomButton label="Send OTP" type="submit" color="primary" />
                    </div>
                </form>
            </div>
        </div>
    );
}
 export default ForgotPassword;
 