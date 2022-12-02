// import { FETCH_ALL, CREATE, UPDATE, DELETE} from '../constants/actionTypes';

// export default (requests = [], action) => {
//   switch (action.type) {
//     case FETCH_ALL:
//       return action.payload;
//     case CREATE:
//       return [...requests, action.payload];
//     case UPDATE:
//       return requests.map((request) =>
//         request._id === action.payload._id ? action.payload : request
//       );
//     case DELETE:
//       return requests.filter((request) => request._id !== action.payload);
//     default:
//       return requests;
//   }
// };


import { FETCH_ALL, FETCH_BY_SEARCH, FETCH_REQUEST, CREATE, UPDATE, DELETE} from '../constants/actionTypes';

export default (state = { isLoading: true, requests: [] }, action) => {
  switch (action.type) {
    case 'START_LOADING':
      return { ...state, isLoading: true };
    case 'END_LOADING':
      return { ...state, isLoading: false };
    case FETCH_ALL:
      return {
        ...state,
        requests: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      };
    case FETCH_BY_SEARCH:
      return { ...state, requests: action.payload.data };
    case FETCH_REQUEST:
      return { ...state, request: action.payload.request };
      
    // case CREATE:
    //   return { ...state, requests: [...state.requests, action.payload] };
    // case UPDATE:
    //   return { ...state, requests: state.requests.map((request) => (request._id === action.payload._id ? action.payload : request)) };
    // case DELETE:
    //   return { ...state, requests: state.requests.filter((request) => request._id !== action.payload) };
    // default:
    //   return state;
    case CREATE:
      return { ...state, requests: [...state.requests, action.payload] };
    case UPDATE:
      return { ...state, requests: state.requests.map((post) => (post._id === action.payload._id ? action.payload : post)) };
    case DELETE:
      return { ...state, requests: state.requests.filter((post) => post._id !== action.payload) };
    default:
      return state;
  }
};