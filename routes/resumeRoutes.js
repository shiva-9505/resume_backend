const express = require('express');
const router = express.Router();

const { uploadResume, getAllResumes } = require('../controllers/resumeController');
const authMiddleware = require('../middlewares/authMiddleware');
const { upload } = require('../utils/multerConfig');

// @route POST /api/resume/upload
router.post('/upload', authMiddleware, upload.single('resume'), uploadResume);

// @route GET /api/resume/all
router.get('/all', authMiddleware, getAllResumes);

module.exports = router;
