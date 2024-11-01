const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

// Exibe o formulário de cadastro de administrador
router.get('/register-admin', adminController.showRegisterForm);

// Processa o cadastro de um novo administrador
router.post('/register-admin', adminController.registerAdmin);

// Rota para exibir a página de login
router.get('/login', adminController.showLoginPage);

// Rota para processar o login
router.post('/login', adminController.loginAdmin);


module.exports = router;
