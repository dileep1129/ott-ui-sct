import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import InputField from '../components/InputField';
import CustomButton from '../components/CustomButton';
 
function ResetPassword() {
    const navigate = useNavigate();
    const location = useLocation();
    const email = location.state?.email || '';
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
 
    const handleSubmit = (e) => {
        e.preventDefault();
        if (newPassword !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        console.log('Password reset successful for:', email);
         navigate('/login');
    };
 
    return (
        <div className="d-flex justify-content-center align-items-center p-5">
            <div className="w-100" style={{ maxWidth: '400px' }}>
                <h1 className="text-center mb-4">Reset Password</h1>
                <form onSubmit={handleSubmit}>
                    <InputField
                        type="password"
                        name="newPassword"
                        placeholder="Enter new password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                    />
                    <InputField
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm new password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                    <div className="d-flex justify-content-center mt-3">
                        <CustomButton label="Reset Password" type="submit" color="primary" />
                    </div>
                </form>
            </div>
        </div>
    );
}
 export default ResetPassword;