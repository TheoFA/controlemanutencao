// middlewares/auth.js
exports.isAuthenticated = (req, res, next) => {
    if (req.session.adminId) {
      return next(); // Se estiver logado, continua para a próxima rota
    }
    res.redirect('/admin/login'); // Se não estiver logado, redireciona para a página de login
  };
  