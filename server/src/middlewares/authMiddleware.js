const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) return res.sendStatus(403);

  jwt.verify(token.split(' ')[1], process.env.JWT_SECRET, (err) => {
    if (err) return res.sendStatus(403);

    next();
  });
};