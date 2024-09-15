const jwt = require('jsonwebtoken');
const secretKey = '2345'; // Ensure this is the exact same key used during token generation

const verifyToken = (req, res, next) => {
    // const authHeader = req.headers['authorization'];
    const token = req.cookies.token;
    console.log(token);
    // if (!authHeader) {
    //     return res.status(403).json({ message: 'No token provided' });
    // }

    // Split the "Bearer" prefix from the token
    // const token = authHeader.split(' ')[1];

    if (!token) {
        return res.status(403).json({ message: 'No token provided' });
    }

    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.status(500).json({ message: 'Failed to authenticate token' });
        }

        req.user = decoded;
        next();
    });
};

module.exports = verifyToken;
