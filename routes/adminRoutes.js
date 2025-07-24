const express = require('express');
const router = express.Router();

const { createUser } = require('../controllers/adminController');
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

// @route POST /api/admin/create-user
router.post('/create-user', authMiddleware, roleMiddleware('admin'), createUser);

module.exports = router;
