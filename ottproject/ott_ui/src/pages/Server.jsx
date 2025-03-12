const express = require('express');
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let otpStore = {}; // In-memory store for OTPs (for demo purposes)

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-email-password',
  },
});

// API to send OTP
app.post('/api/send-otp', (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.json({ success: false, message: 'Email is required.' });
  }

  // Generate a random 6-digit OTP
  const otp = crypto.randomInt(100000, 999999).toString();

  // Store OTP temporarily (for verification later)
  otpStore[email] = otp;

  // Send OTP email
  const mailOptions = {
    from: 'your-email@gmail.com',
    to: email,
    subject: 'Password Reset OTP',
    text: `Your OTP for password reset is: ${otp}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.json({ success: false, message: 'Failed to send OTP.' });
    } else {
      return res.json({ success: true, message: 'OTP sent successfully.' });
    }
  });
});

// API to verify OTP
app.post('/api/verify-otp', (req, res) => {
  const { email, otp } = req.body;

  if (otpStore[email] === otp) {
    return res.json({ success: true, message: 'OTP verified successfully.' });
  } else {
    return res.json({ success: false, message: 'Invalid OTP.' });
  }
});

// API to reset password
app.post('/api/reset-password', (req, res) => {
  const { email, newPassword } = req.body;

  // Reset password logic here (e.g., update in database)
  // For now, just send a success response
  return res.json({ success: true, message: 'Password reset successfully.' });
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
