import express from 'express';
import User from '../models/User.js';
import jwt from 'jsonwebtoken';

const router = express.Router();

// Signup Route
router.post('/signup', async (req, res) => {
  const { fullName, email, password, agreeToTerms } = req.body;

  if (!fullName || !email || !password || !agreeToTerms) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ error: 'Email already exists' });
    }

    const user = new User({ fullName, email, password, agreeToTerms });
    await user.save();

    res.status(201).json({ message: 'User registered successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Login Route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '7d',
    });

    res.json({ token, user: { id: user._id, fullName: user.fullName, email: user.email } });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

router.get('/test', (req, res) => {
  res.json({ message: 'Auth route working!' });
});

export default router;
