import axios from 'axios';

// Backend API URL
export const API_HOST = 'https://backend-4moms.herokuapp.com';

// eslint-disable-next-line import/prefer-default-export
export const api = {
  user: {
    signup: data => axios.post(`${API_HOST}/users/`, data),
    signin: data => axios.post(`${API_HOST}/api-token-auth/`, data),
  },
  children: {
    viewChildren: config => axios.get(`${API_HOST}/babies/`, config),
    deleteChild: data => axios.delete(`${API_HOST}/babies/${data.id}/`, data.config),
    addChild: data => axios.post(`${API_HOST}/babies/`, data.payload, data.config),
  }
};
