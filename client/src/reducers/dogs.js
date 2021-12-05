import { FETCH_ALL,CREATE, BOOP, DELETE } from '../constants/actionTypes';

const reducers = (state = [], action )=> {
    switch(action.type){
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...state, action.payload];
        case BOOP:
            return state.map((dog)=>(dog._id === action.payload._id ? action.payload: dog));
        case DELETE:
            return state.filter(dog => dog._id !== action.payload)
        default:
            return state
    }
}

export default reducers