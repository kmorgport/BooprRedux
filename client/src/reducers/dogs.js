import { FETCH_ALL,CREATE, BOOP, DELETE, START_LOADING, END_LOADING } from '../constants/actionTypes';

const reducers = (state = { isLoading: true, dogs: []}, action )=> {
    switch(action.type){
        case FETCH_ALL:
            return {
                ...state,
                dogs: action.payload.data
             }   
        case CREATE:
            return {...state, dogs: [...state, action.payload]};
        case BOOP:
            return {...state, dogs: state.dogs.map((dog)=>(dog._id === action.payload._id ? action.payload: dog))};
        case DELETE:
            return {...state, dogs: state.dogs.filter(dog => dog._id !== action.payload)};
        case START_LOADING:
            return { ...state, isLoading: true }
        case END_LOADING:
            return { ...state, isLoading: false }
        default:
            return state
    }
}

export default reducers