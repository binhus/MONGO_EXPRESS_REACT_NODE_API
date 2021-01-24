const rescue = require('express-rescue');
const Joi = require('@hapi/joi');
const model = require('../Models/index');

const BODY_NAME_SCHEMA = Joi.object({
  name: Joi.string().required().min(3).max(20),
});

const savePages = rescue(async (req, _res, next) => {
  const pages = await model.getAll();
  req.data = pages;
  next();
});

const searchPage = rescue(async (req, _res, next) => {
  const { error } = BODY_NAME_SCHEMA.validate(req.body);
  if (error) throw new Error(error);
  const { name } = req.body;
  const search = await model.getByName(name);
  req.data = { message: 'Page already exists' };
  if (!search) {
    await model.createPage(name);
    req.data = { message: 'Page created!' };
  }
  next();
});


const findByName = rescue(async (req, _res, next) => {
  const { name } = req.params
  const search = await model.getByName(name);
  if (!search) {
    throw new Error(404);
  }
  req.data = search;
  next();
});

module.exports = {
  savePages,
  searchPage,
  findByName,
};
