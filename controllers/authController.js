const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(400).send("Credenciais inválidas");
  }

  // Gerar token JWT
  const token = jwt.sign({ id: user._id, role: user.role }, 'seu_segredo');
  res.cookie('token', token, { httpOnly: true });
  res.redirect('/');
};

exports.logout = (req, res) => {
  res.clearCookie('token');
  res.redirect('/login');
};
