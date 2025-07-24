const User = require('../models/User');

exports.createUser = async (req, res) => {
  const { name, email, phone } = req.body;

  try {
    const existing = await User.findOne({ email });
    if (existing) return res.status(409).json({ message: 'Email already exists' });

    const user = new User({ name, email, phone, role: 'user' });
    await user.save();

    res.status(201).json({ message: 'User created successfully', user });
  } catch (error) {
    res.status(500).json({ message: 'User creation failed', error });
  }
};
