const express = require('express');
const mongoose = require('./config/db');
const clientRoutes = require('./routes/clientRoutes');
const productRoutes = require('./routes/productRoutes');
const reportRoutes = require('./routes/reportRoutes');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');


// Rotas
app.use('/', authRoutes);
app.use('/', userRoutes);
app.use('/', clientRoutes);
app.use('/', productRoutes);
app.use('/', reportRoutes);
app.use('/admin', adminRoutes);

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
