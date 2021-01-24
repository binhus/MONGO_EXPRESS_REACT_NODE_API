const connection = require('./connection');

const getAll = async () =>
  connection('pages')
    .then((pages) => pages.find().toArray());

const getByName = async (name) =>
  connection('pages').then((pages) => pages.findOne({name: { $eq: `${name}` } }));

const createPage = async (name) =>
connection('pages').then((pages) => pages.insertOne({name: name }));

module.exports = {
  getAll,
  getByName,
  createPage,
}