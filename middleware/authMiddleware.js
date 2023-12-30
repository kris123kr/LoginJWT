const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const secretKey = 'your-secret-key'; // Replace with your actual secret key

// const authenticate = expressJwt({ secret: secretKey, algorithms: ['HS256'] });

const generateToken = (user) => {
  return jwt.sign(user, secretKey, { expiresIn: '1h' });
};

module.exports = {
  // authenticate,
  generateToken,
};
