const { check, validationResult } = require('express-validator');

// Add validation to Signup Route
router.post('/signup', async (req, res) => {
    try {
      const { username, password } = req.body;
 
      // Check if username and password are provided
      if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required' });
      }
 
      // Check if user already exists
      const existingUser = await User.findOne({ username });
      if (existingUser) {
        return res.status(400).json({ error: 'User already exists' });
      }
 
      // Create new user
      const newUser = new User({ username, password });
      await newUser.save();
      res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
      console.error("Signup error:", err.message); // Log error
      res.status(500).json({ error: 'Server error' });
    }
  });
 
  console.log("Signup request body:", req.body);