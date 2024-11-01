const Client = require('../models/Client');
const Product = require('../models/Product');

exports.createClient = async (req, res) => {
  try {
    const { name, cnpj } = req.body;
    const client = await Client.create({ name, cnpj });
    res.redirect('/clients');
  } catch (error) {
    res.status(500).send('Erro ao criar cliente');
  }
};

exports.listClients = async (req, res) => {
  const clients = await Client.find();
  res.render('client-list', { clients });
};

exports.viewClientProducts = async (req, res) => {
  const clientId = req.params.id;
  const client = await Client.findById(clientId);
  const products = await Product.find({ client: clientId });
  res.render('client-products', { client, products });
};
