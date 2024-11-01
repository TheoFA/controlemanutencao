const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { authMiddleware, adminOnly } = require('../config/auth');

router.get('/dashboard', authMiddleware, (req, res) => res.render('dashboard'));
router.get('/register-funcionario', authMiddleware, adminOnly, (req, res) => res.render('register-funcionario'));
router.post('/register-funcionario', authMiddleware, adminOnly, userController.registerFuncionario);

module.exports = router;
