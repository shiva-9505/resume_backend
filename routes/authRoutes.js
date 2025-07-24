const express = require('express');
const router = express.Router();

const {
  loginWithEmail,
  verifyOTP,
} = require('../controllers/authController');

// @route POST /api/auth/login
router.post('/login', loginWithEmail);

// @route POST /api/auth/verify
router.post('/verify', verifyOTP);

module.exports = router;
