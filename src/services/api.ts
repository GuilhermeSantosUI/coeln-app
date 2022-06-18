import axios from 'axios';

const api = axios.create({
  baseURL: 'http://dbcoeln.herokuapp.com/',
});

export default api;
