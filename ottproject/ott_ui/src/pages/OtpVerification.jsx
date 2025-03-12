import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import InputField from '../components/InputField';
import CustomButton from '../components/CustomButton';
function OtpVerification() {
    const navigate = useNavigate();
    const location = useLocation();
    const email = location.state?.email || '';
    const [otp, setOtp] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('OTP entered:', otp);
        navigate('/reset-password', { state: { email } });
    };
    return (
        <div className="d-flex justify-content-center align-items-center p-5">
            <div className="w-100" style={{ maxWidth: '400px' }}>
                <h1 className="text-center mb-4">Enter OTP</h1>
                <p className="text-center">OTP has been sent to {email}</p>
                <form onSubmit={handleSubmit}>
                    <InputField
                        type="text"
                        name="otp"
                        placeholder="Enter OTP"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        maxLength={6}
                        required
                    />
                    <div className="d-flex justify-content-center mt-3">
                        <CustomButton label="Verify OTP" type="submit" color="primary" />
                    </div>
                </form>
            </div>
        </div>
    );
}
 export default OtpVerification;