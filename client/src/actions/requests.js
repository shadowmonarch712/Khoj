import { FETCH_ALL, CREATE, UPDATE, DELETE} from '../constants/actionTypes';
import * as api from '../api';

//Action creators
const getRequests= ()=> async (dispatch)=>{

    try {
        const {data} = await api.fetchRequests();
        dispatch({type:FETCH_ALL, payload: data});
    } catch (error) {
        console.log(error.message);   
    }
}
export const createRequest = (request)=> async (dispatch)=>{
    try {
        const {data} = await api.createRequest(request);
        dispatch({type:CREATE , payload : data})
    } catch (error) {
        console.log(error.message);
    }
}

export const updateRequest = (id, request) => async (dispatch) => {
    try {
      const { data } = await api.updateRequest(id, request);
  
      dispatch({ type: UPDATE, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };

export const deleteRequest = (id) => async (dispatch) => {
    try {
      await api.deleteRequest(id);
  
      dispatch({ type: DELETE, payload: id });
    } catch (error) {
      console.log(error.message);
    }
  };
  
export default getRequests;