import { FETCH_ALL, CREATE, UPDATE, DELETE} from '../constants/actionTypes';

export default (requests = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...requests, action.payload];
    case UPDATE:
      return requests.map((request) =>
        request._id === action.payload._id ? action.payload : request
      );
    case DELETE:
      return requests.filter((request) => request._id !== action.payload);
    default:
      return requests;
  }
};
