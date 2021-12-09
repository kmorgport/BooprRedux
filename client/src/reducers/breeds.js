import { FETCH_BREEDS } from "../constants/actionTypes";

const reducers = ( state = {isLoading: true, breeds: []}, action)=>{
    switch(action.type){
        case FETCH_BREEDS:
            return {
                ...state,
                breeds: action.payload.data
            }
        default:
            return state
    }
}

export default reducers