import axios from '../../plugins/axios';

export const listRestaurants = ({ commit }) => {
  commit('SET_RESTAURANTS', []);
  return axios.get('/restaurants')
    .then((response) => {
      commit('SET_RESTAURANTS', response.data);
      return response;
    })
    .catch((err) => err.response);
};

export const listComments = ({ commit }) => {
  commit('SET_COMMENTS', []);
  return axios.get('/comments')
    .then((response) => {
      commit('SET_COMMENTS', response.data);
      return response;
    })
    .catch((err) => err.response);
};

export const getRestaurant = ({ commit }, payload) => {
  commit('SET_RESTAURANT', { store: null });
  return axios.get(`/restaurants/${payload.id}`)
    .then((response) => {
      commit('SET_RESTAURANT', response.data);
      return response;
    })
    .catch((err) => err.response);
};

export const createComment = ({ dispatch }, payload) => axios.post('/comments', payload.data)
  .then((response) => {
    console.log(response);
    dispatch('listComments');
    return response;
  })
  .catch((err) => err.response);
