import * as actions from './actions';
import mutations from './mutations';
import * as getters from './getters';

const restaurantStore = {
  state: {
    restaurants: [],
    restaurant: null,
    comments: [],
  },
  getters,
  mutations,
  actions,
};

export default restaurantStore;
