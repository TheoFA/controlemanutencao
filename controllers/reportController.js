const Report = require('../models/Report');

exports.createReport = async (req, res) => {
  try {
    const { content } = req.body;
    const productId = req.params.productId;
    await Report.create({ content, product: productId });
    res.redirect(`/products/${productId}/reports`);
  } catch (error) {
    res.status(500).send('Erro ao criar relatório');
  }
};
