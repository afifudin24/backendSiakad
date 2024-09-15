const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/userModels');

const secretKey = '2345'; // Gantilah dengan key yang lebih aman

const login = (req, res) => {
    const { username, password } = req.body;

    User.findByUsername(username, (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Database error' });
        }

        if (results.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }

        const user = results[0];
        console.log(user);

        // Verifikasi password
        const isPasswordValid = bcrypt.compareSync(password, user.password);
        console.log(password);
        console.log(isPasswordValid);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        // Buat token JWT
        const token = jwt.sign({ id: user.id, username : user.username, role : user.role }, secretKey);
         res.cookie('token', token, {
      httpOnly: true, // Cookie tidak bisa diakses oleh JavaScript
      secure: false,   // Cookie hanya dikirim via HTTPS (pastikan server mendukung HTTPS)
      sameSite: 'Strict', // Cookie hanya dikirim dari domain yang sama
      maxAge: 3600000    // Expire dalam 1 jam
    });
        res.status(200).json({
            message: 'Login successful',
            token: token,
            userId: user.id,
            role : user.role,
            username : user.username
        });
    });
};

const blacklistedTokens = new Set();

const logout = (req, res) => {
   const token = req.cookies.token;
    blacklistedTokens.add(token); // Add the token to the blacklist
    res.status(200).json({ message: 'Logout successful' });
};

module.exports = { login, logout };


