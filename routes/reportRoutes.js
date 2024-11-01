const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportController');

router.post('/products/:productId/reports', reportController.createReport);

module.exports = router;
