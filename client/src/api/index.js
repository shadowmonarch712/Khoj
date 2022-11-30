// import axios from 'axios';

// const url = 'http://localhost:5000/requests';
// export const fetchRequests = ()=> axios.get(url);
// export const createRequest = (newRequest)=> axios.Request(url,newRequest) ;
// export const updateRequest = (id, updatedRequest) => axios.patch(`${url}/${id}`, updatedRequest);
// export const deleteRequest = (id) => axios.delete(`${url}/${id}`);

import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});

export const fetchRequests = () => API.get('/requests');
export const createRequest = (newRequest) => API.post('/requests', newRequest);
export const updateRequest = (id, updatedRequest) => API.patch(`/requests/${id}`, updatedRequest);
export const deleteRequest = (id) => API.delete(`/requests/${id}`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);