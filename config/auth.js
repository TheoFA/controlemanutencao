const jwt = require('jsonwebtoken');

exports.authMiddleware = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.redirect('/login');

  jwt.verify(token, 'seu_segredo', (err, decoded) => {
    if (err) return res.redirect('/login');
    req.user = decoded;
    next();
  });
};

exports.adminOnly = (req, res, next) => {
  if (req.user.role !== 'admin') return res.status(403).send("Acesso negado");
  next();
};
