'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('Restaurants', [{
      name: 'Mc Donalds',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/McDonald%27s_SVG_logo.svg/1200px-McDonald%27s_SVG_logo.svg.png',
      pictures:"[\"https://www.camaracivica.com/wp-content/uploads/2017/09/maxresdefault.jpg\",\"https://media-cdn.tripadvisor.com/media/photo-s/15/80/b3/93/img-20181120-113151-largejpg.jpg\"]",
      description: 'Primer restaurante de prueba, el cual es McDonalds',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Burguer King',
      logoUrl: 'https://logos-marcas.com/wp-content/uploads/2020/08/Burger-King-Logotipo-1999-presente.jpg',
      pictures:"[\"https://media-cdn.tripadvisor.com/media/photo-s/18/32/77/f0/photo0jpg.jpg\",\"https://cdn.shopify.com/s/files/1/0247/8869/7150/files/la_casa_de_w_c79d48dc-f813-4523-b61b-452386551de4.jpg?v=1588336848\"]",
      description: 'Segundo Restaurante de prueba, el cual es Burguer King',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
