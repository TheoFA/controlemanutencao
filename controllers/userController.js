const User = require('../models/User');

exports.registerFuncionario = async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).send("Acesso negado");
  const { username, password } = req.body;
  await User.create({ username, password, role: 'funcionario' });
  res.redirect('/dashboard');
};
