const jwt = require('jsonwebtoken');
const secretKey = '2345';

const checkRole = (roles) => {
  return (req, res, next) => {
    //  const authHeader = req.headers['authorization'];
      //  const token = authHeader.split(' ')[1];
       const token = req.cookies.token;
     console.log(token);
    if (!token) {
      return res.status(401).json({ message: 'Unauthorized: Token is missing' });
    }

    // Verify token
      jwt.verify(token, secretKey, (err, decoded) => {
          console.log(err);
      if (err) {
        return res.status(401).json({ message: 'Unauthorized: Invalid token' });
      }

      // Cek apakah role pengguna cocok dengan role yang diizinkan
      if (!roles.includes(decoded.role)) {
        return res.status(403).json({ message: 'Forbidden: You do not have permission to access this resource' });
      }

      // Simpan informasi pengguna ke req.user untuk penggunaan selanjutnya
      req.user = decoded; // decoded berisi { id, username, role }
      next();
    });
  };
};

module.exports = checkRole;
