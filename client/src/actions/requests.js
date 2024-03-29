// import { FETCH_ALL, CREATE, UPDATE, DELETE} from '../constants/actionTypes';
import {
  START_LOADING,
  END_LOADING,
  FETCH_ALL,
  FETCH_REQUEST,
  FETCH_BY_SEARCH,
  CREATE,
  UPDATE,
  DELETE,
  COMMENT,
  FETCH_BY_CREATOR,
} from "../constants/actionTypes";
import * as api from "../api";

//Action creators
export const getRequest = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.fetchRequest(id);

    dispatch({ type: FETCH_REQUEST, payload: { request: data } });
  } catch (error) {
    console.log(error);
  }
};

// const getRequests= ()=> async (dispatch)=>{

//     try {
//         const {data} = await api.fetchRequests();
//         dispatch({type:FETCH_ALL, payload: data});
//     } catch (error) {
//         console.log(error.message);
//     }
// }

export const getRequests = (page) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const {
      data: { data, currentPage, numberOfPages },
    } = await api.fetchRequests(page);

    dispatch({
      type: FETCH_ALL,
      payload: { data, currentPage, numberOfPages },
    });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const getRequestsBySearch = (searchQuery) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const {
      data: { data },
    } = await api.fetchRequestsBySearch(searchQuery);

    dispatch({ type: FETCH_BY_SEARCH, payload: { data } });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const createRequest = (request) => async (dispatch) => {
  try {
    const { data } = await api.createRequest(request);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateRequest = (id, request) => async (dispatch) => {
  try {
    const { data } = await api.updateRequest(id, request);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const commentRequest = (value, id) => async (dispatch) => {
  try {
    const { data } = await api.comment(value, id);

    dispatch({ type: COMMENT, payload: data });

    return data.comments;
  } catch (error) {
    console.log(error);
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
export const getRequestsByCreator = (name) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data: { data } } = await api.fetchRequestsByCreator(name);

    dispatch({ type: FETCH_BY_CREATOR, payload: { data } });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export default getRequests;
