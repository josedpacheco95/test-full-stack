import axios from 'axios';
import settings from '../../settings';

const instance = axios.create({
  baseURL: settings.baseApi,
});

export default instance;
