const User = require('../models/User'); // Este é o modelo de usuários
const bcrypt = require('bcrypt');

// Exibe o formulário de cadastro de administrador
exports.showRegisterForm = (req, res) => {
  res.render('register-admin'); // renderiza o EJS para cadastrar administradores
};

// Processa o cadastro de um novo administrador
exports.registerAdmin = async (req, res) => {
    try {
      const { username, password } = req.body;
  
      // Hash da senha
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Criação de um novo usuário com role 'admin'
      const newAdmin = new User({
        username,
        password: hashedPassword,
        role: 'admin',
      });
  
      await newAdmin.save();
  
      res.send('Administrador cadastrado com sucesso!');
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro ao cadastrar o administrador');
    }
  };

// Exibe a página de login do administrador
exports.showLoginPage = (req, res) => {
  res.render('admin-login'); // Renderiza a página de login
};

// Processa o login do administrador
exports.loginAdmin = async (req, res) => {
    const { username, password } = req.body;
  
    try {
      const admin = await User.findOne({ username }); // Usando User se Admin for um papel de usuário
      if (!admin) {
        return res.status(401).send('Usuário ou senha inválidos');
      }
  
      const isMatch = await bcrypt.compare(password, admin.password); // Comparação da senha
      if (!isMatch) {
        return res.status(401).send('Usuário ou senha inválidos');
      }
  
      req.session.adminId = admin._id; // Armazena ID na sessão
      res.redirect('/clients'); // Redireciona após login
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro ao processar login');
    }
  };


  async function testPassword() {
    const passwordFromUser = 'c'; // A senha que você digitou
    const hashedPassword = '$2a$10$tmSYkAaunLUeV6IL9fLN2e7pPuoUyC9sLYUagTIJ5kksAKTKGh0EK'; // Remova um dos `$`
  
    const isMatch = await bcrypt.compare(passwordFromUser, hashedPassword);
    console.log('Senha válida:', isMatch); // Deve ser true
  }
  
  // Chame a função de teste
  testPassword();
  