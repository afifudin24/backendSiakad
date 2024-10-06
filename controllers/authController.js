const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/userModels');
const Admin = require('../models/adminModels');
const Guru = require('../models/guruModels');
const Siswa = require('../models/siswaModel');
const StafPembayaran = require('../models/stafPembayaranModels');
const secretKey = '2345'; // Use a more secure key in production

const getUserAccountByRole = (role, userId) => {
  return new Promise((resolve, reject) => {
    if (role === 1) {
      Admin.getAdminById(userId, (err, result) => {
        if (err) return reject(err);
        resolve(result[0]);
      });
    } else if (role === 3) {
      Siswa.getById(userId, (err, result) => {
        if (err) return reject(err);
        resolve(result[0]);
      });
    } else if (role === 2) {
      // Assuming role 4 is for Guru
      Guru.getById(userId, (err, result) => {
        if (err) return reject(err);
        resolve(result[0]);
      });
    } else if (role === 4) {
      // Assuming role 4 is for Guru
      StafPembayaran.getById(userId, (err, result) => {
        if (err) return reject(err);
        resolve(result[0]);
      });
    } else {
      reject(new Error('Invalid role'));
    }
  });
};

const login = async (req, res) => {
  const { username, password } = req.body;

  User.findByUsername(username, async (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Database error' });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    const user = results[0];

    // Verifikasi password
    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    // Buat token JWT
    const token = jwt.sign(
      { id: user.id, username: user.username, role: user.role },
      secretKey,
    );

    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
      sameSite: 'Strict',
      maxAge: 3600000,
    });

    try {
      const userAccount = await getUserAccountByRole(user.role, user.id);

      res.status(200).json({
        message: 'Login successful',
        user: {
          token: token,
          userId: user.id,
          role: user.role,
          username: user.username,
        },
        userAccount,
      });
    } catch (err) {
      res
        .status(500)
        .json({ message: 'Error fetching user account', error: err.message });
    }
  });
};

const blacklistedTokens = new Set();

const logout = (req, res) => {
  const token = req.cookies.token;
  if (token) {
    blacklistedTokens.add(token); // Add the token to the blacklist
  }
  res.status(200).json({ message: 'Logout successful' });
};

module.exports = { login, logout };
