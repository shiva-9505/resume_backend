const Resume = require('../models/Resume');
const parseResume = require('../utils/resumeParser');

exports.uploadResume = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ message: 'No file uploaded' });

    const parsedData = await parseResume(req.file.path);

    const resume = new Resume({
      user: req.user.id,
      filePath: req.file.path,
      parsedData,
    });

    await resume.save();

    res.status(201).json({ message: 'Resume uploaded successfully', resume });
  } catch (error) {
    res.status(500).json({ message: 'Resume upload failed', error });
  }
};

exports.getAllResumes = async (req, res) => {
  try {
    const resumes = await Resume.find().populate('user', 'name email');
    res.status(200).json(resumes);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch resumes', error });
  }
};
