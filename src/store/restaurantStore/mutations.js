const mutations = {
  SET_RESTAURANTS(state, restaurants) {
    state.restaurants = restaurants;
  },
  SET_RESTAURANT(state, restaurant) {
    state.restaurant = restaurant;
  },
  SET_COMMENTS(state, comments) {
    state.comments = comments;
  },
};

export default mutations;
