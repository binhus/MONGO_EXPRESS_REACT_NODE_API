const { Router } = require('express');
const services = require('../Services/index');
const bodyParser = require('body-parser');

const controller = Router();


// endpoint de login
controller.get('/', services.savePages, (req, res) => {
  res.status(200).json(req.data);
});

controller.post('/:name', services.findByName, (req, res) => {
  res.status(200).json(req.data);
});

controller.post('/', services.searchPage, (req, res) => {
  res.status(200).json(req.data);
});


module.exports = controller;