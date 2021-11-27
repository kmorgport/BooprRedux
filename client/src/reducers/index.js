import { combineReducers } from "redux";
import dogs from './dogs';
import auth from './auth';

export default combineReducers({ dogs, auth})