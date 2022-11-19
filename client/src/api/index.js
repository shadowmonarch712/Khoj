import axios from 'axios';

const url = 'http://localhost:5000/requests';
export const fetchRequests = ()=> axios.get(url);
export const createRequest = (newRequest)=> axios.post(url,newRequest) ;
export const updateRequest = (id, updatedRequest) => axios.patch(`${url}/${id}`, updatedRequest);
export const deleteRequest = (id) => axios.delete(`${url}/${id}`);
