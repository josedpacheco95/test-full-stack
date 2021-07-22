import axios from '../../plugins/axios';

export const listRestaurants = ({ commit }) => {
  /*
    Devuelve todos los restaurantes en un arreglo
  */
  commit('SET_RESTAURANTS', []);
  return axios.get('/restaurants')
    .then((response) => {
      commit('SET_RESTAURANTS', response.data);
      return response;
    })
    .catch((err) => err.response);
};

export const listComments = ({ commit }, id) => {
  /*
    arg:{id} id: Es el id del restaurante que posee esos comentarios
    Esta funcion devuelve un arreglo con los comentarios relacionados a
    un restaurante
  */
  commit('SET_COMMENTS', []);
  return axios.get(`/comments/${id}`)
    .then((response) => {
      commit('SET_COMMENTS', response.data);
      return response;
    })
    .catch((err) => err.response);
};

export const getRestaurant = ({ commit }, payload) => {
  /*
    Devuelve un objecto con la informacion
    relacionada con un restaurante
  */
  commit('SET_RESTAURANT', { store: null });
  return axios.get(`/restaurants/${payload.id}`)
    .then((response) => {
      commit('SET_RESTAURANT', response.data);
      return response;
    })
    .catch((err) => err.response);
};

export const createComment = ({ dispatch }, data) => axios.post('/comments', data)
  /*
    Esta funcion es para crear un comentario y ademas invoca la funcion
    de listar los comentarios para actualizar la lista sin necesidad
    de refrescar la pagina
  */
  .then((response) => {
    console.log(response);
    dispatch('listComments', data.restaurantId);
    return response;
  })
  .catch((err) => err.response);
