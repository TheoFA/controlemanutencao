const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clienteController');
const auth = require('../middlewares/auth'); // Importe o middleware de autenticaçãos

router.get('/clients', auth.isAuthenticated, clientController.listClients);
router.get('/clients/:id/products', auth.isAuthenticated, clientController.viewClientProducts);
router.post('/clients', auth.isAuthenticated, clientController.createClient);

module.exports = router;
