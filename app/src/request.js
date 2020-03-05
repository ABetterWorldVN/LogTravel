import axios from 'axios';

const rq = {
  init() {
    axios.defaults.baseURL = process.env.VUE_APP_API_URL;
  },
  
  get(resource) {
    return axios.get(resource)
  },

  post(resource, data) {
    return axios.post(resource, data)
  },

  put(resource, data) {
    return axios.put(resource, data)
  },

  delete(resource) {
    return axios.delete(resource)
  },
};

export default rq;
