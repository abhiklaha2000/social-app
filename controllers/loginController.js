const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const login  = async(req, res) => {
    const { username, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ username, password });

    if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Create and return JWT token
    const token = jwt.sign({ _id: user._id, username: user.username, isAdmin: user.isAdmin }, 'secret_key');
    res.json({ 
        message: 'Successfully logged in!',
        token
    });
}

module.exports = {
    login
}