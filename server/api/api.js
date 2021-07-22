const router = require('express').Router();

module.exports = () => {
  require('./routes/restaurantRoute')(router);
  return router;
}