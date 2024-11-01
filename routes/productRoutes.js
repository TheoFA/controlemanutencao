const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController'); // Verifique se o caminho está correto

// Rota para criar um produto
router.post('/clients/:clientId/products', productController.createProduct);

// Rota para listar relatórios de um produto
router.get('/products/:id/reports', productController.listProductReports);

module.exports = router;
