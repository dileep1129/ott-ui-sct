import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(''); // State for handling login error
  const [emailError, setEmailError] = useState(''); // State for email error
  const [passwordError, setPasswordError] = useState(''); // State for password error
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset previous error states
    setEmailError('');
    setPasswordError('');
    setLoginError('');

    // Validation checks for email and password
    let valid = true;

    if (!email) {
      setEmailError('Email is required');
      valid = false;
    }
    
    if (!password) {
      setPasswordError('Password is required');
      valid = false;
    }

    if (valid) {
      // Proceed with login if both fields are valid
      console.log("Login Successful!");
      navigate('/Home');  // Redirect to Home page after login
    } else {
      setLoginError('Please fill in both email and password.');
    }
  };

  const handleForgotPassword = () => {
    navigate('/forgot-password');
  };

  const handleSignupRedirect = () => {
    navigate('/signup');  // Redirect to Signup page if the user doesn't have an account
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h1 style={styles.heading}>Login</h1>

        {/* Display global error message if loginError is set */}
        {loginError && (
          <div style={styles.errorMessage}>
            <span style={styles.errorIcon}>⚠️</span>
            <span>{loginError}</span>
          </div>
        )}

        {/* Email input field with error styling */}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email or Mobile Number"
          style={{
            ...styles.input,
            ...(emailError ? styles.inputError : {}),
          }}
        />
        {/* Display email-specific error message */}
        {emailError && <div style={styles.inputErrorMessage}>{emailError}</div>}

        {/* Password input field with error styling */}
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          style={{
            ...styles.input,
            ...(passwordError ? styles.inputError : {}),
          }}
        />
        {/* Display password-specific error message */}
        {passwordError && <div style={styles.inputErrorMessage}>{passwordError}</div>}

        <button type="submit" style={styles.button}>Log In</button>
        <div style={styles.forgotPassword}>
          <button type="button" onClick={handleForgotPassword} style={styles.forgotPasswordButton}>
            Forgot Password?
          </button>
        </div>
       
      </form>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#000', // Set background to black
    margin: 0,
    fontFamily: ' Arial,sans-serif', // Set sans-serif font family
  },
  form:  {
    padding: '30px', // Increased padding for better spacing
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '500px', 
    textAlign: 'center',
    borderRadius: '50px',
  },
  heading: {
    marginBottom: '30px',
    color: 'white', 
    fontSize: '30px',
    fontWeight: 'bold',  
  },
  input: {
    width: '110%',
    padding: '12px',  
    margin: '17px 0',
    borderRadius: '9px',
    border: '1px solid #ccc',
    fontSize: '16px',  
  },
  inputError: {
    border: '2px solid red', // Red border for error
  },
  inputErrorMessage: {
    color: 'red',
    fontSize: '12px',
    marginTop: '5px',
    textAlign: 'left',
    

  },
  button: {
    width: '110%',
    padding: '12px',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    borderRadius: '9px',
    fontSize: '18px',  
    cursor: 'pointer',
  },
  forgotPassword: {
    marginTop: '15px',
  },
  forgotPasswordButton: {
    background: 'none',
    border: 'none',
    color: '#007BFF',
    cursor: 'pointer',
    textDecoration: 'underline',
    fontSize: '14px', 
  },
  signupRedirect: {
    marginTop: '15px',
  },
  signupRedirectButton: {
    background: 'none',
    border: 'none',
    color: '#007BFF',
    cursor: 'pointer',
    textDecoration: 'underline',
    fontSize: '14px', 
  },
  errorMessage: {
    backgroundColor: '#f8d7da', // Light red background for error
    color: '#721c24', // Dark red text for visibility
    border: '1px solid #f5c6cb', // Red border for the alert
    padding: '10px',
    marginBottom: '15px',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    width: '110%',
  },
  errorIcon: {
    marginRight: '10px',
    fontSize: '18px',
  },
};

export default Login;


