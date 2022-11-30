import { combineReducers } from "redux";
import requests from './requests';
import auth from './auth';

export default combineReducers({
    requests, auth
 });    
