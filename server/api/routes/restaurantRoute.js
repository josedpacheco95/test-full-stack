const controller = require('../controllers/restaurantController')

module.exports = (router) => {
  router.get('/restaurants/', controller.listRestaurants);
  router.get('/restaurants/:id', controller.getRestaurant);
  router.get('/comments/:restaurant_id',controller.getComments);
  router.post('/comments/', controller.createComment);
};