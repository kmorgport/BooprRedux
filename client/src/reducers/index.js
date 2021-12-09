import { combineReducers } from "redux";
import dogs from './dogs';
import auth from './auth';
import breeds from './breeds';

export default combineReducers({ dogs, auth, breeds})