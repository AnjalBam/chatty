const jwt = require('jsonwebtoken');

const JWT_SECRET  = process.env.JWT_SECRET || 'topSecretKey';

const generateToken = (payload) => {
  return jwt.sign(payload, JWT_SECRET, {expiresIn: '24h'}).toString();
};

const verifyToken = (token) => {
  return jwt.verify(token, JWT_SECRET);
};

module.exports = {
  generateToken,
  verifyToken,
};