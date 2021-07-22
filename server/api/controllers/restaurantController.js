const { Comments, Restaurant } = require('../../db/models');
const { Sequelize, Op } = require("sequelize");

/* Method listRestaurants
 * URI: /restaurants
 * Method: GET
*/

exports.listRestaurants = async (req, res, next) => {
  try {
    const restaurants = await Restaurant.findAll();
    res.status(200).json(restaurants);
  } catch (err) {
    next(err);
  }
};

/* Method getRestaurant
 * URI: /restaurants/:id
 * Method: GET
*/
exports.getRestaurant = async (req, res, next) => {
  try {
    const id = req.params.id;
    const restaurant = await Restaurant.findByPk(id);
    if (!restaurant) {
      throw new Error('No se encontró el restaurante');
    }
    res.status(200).json(restaurant);
  } catch (err) {
    next(err);
  }
};

/* Method getComments
 * URI: /comments/:restaurant_id
 * Method: GET
*/

exports.getComments = async (req, res, next) => {
  try {
    const id = req.params.restaurant_id;
    console.log(id)
    const comments = await Comments.findAll({
      where: {
        restaurantId: id
      }
    });
    res.status(200).json(comments);
  } catch (err) {
    next(err);
  }
};

/* Method createComment
 * URI: /comments/
 * Method: POST
*/

exports.createComment = async (req, res, next) => {
  try {
    const data = req.body;
    const comment = await Comments.create(data);
    res.status(201).json(comment);
  } catch (err) {
    next(err);
  }
};

