const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

module.exports = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    console.log(token);
    if (!token) {
      return res.status(401).json({ message: 'Authorization token is required' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
      if (err) {
        console.error(err);
        return res.status(403).json({ message: 'Forbidden' });
      }

      // Attach decoded token payload to request object
      req.user = decodedToken;
      next();
    });
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: 'Invalid token' });
  }
};
