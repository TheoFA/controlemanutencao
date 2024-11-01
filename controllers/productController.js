const Product = require('../models/Product');
const Report = require('../models/Report'); // Verifique se existe o modelo Report e está correto

exports.createProduct = async (req, res) => {
  try {
    const { name } = req.body;
    const clientId = req.params.clientId;
    await Product.create({ name, client: clientId });
    res.redirect(`/clients/${clientId}/products`);
  } catch (error) {
    res.status(500).send('Erro ao criar produto');
  }
};

exports.listProductReports = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    const reports = await Report.find({ product: productId });
    res.render('product-reports', { product, reports });
  } catch (error) {
    res.status(500).send('Erro ao listar relatórios do produto');
  }
};
