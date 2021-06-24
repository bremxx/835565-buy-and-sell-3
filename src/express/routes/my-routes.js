'use strict';

const {Router} = require(`express`);
const api = require(`../api`).getAPI();
const myRouter = new Router();


myRouter.get(`/`, async (req, res) => {
  const offers = await api.getOffers();
  res.render(`my-tickets`, {offers});
});

module.exports = myRouter;
