import { FETCH_BREEDS } from '../constants/actionTypes';
import * as api from '../api';

export const fetchBreeds = () => async (dispatch) => {
    try{
        const { data: {data} } = await api.fetchBreeds();

        dispatch({type: FETCH_BREEDS, payload: {data}})

    }catch(error){
        console.log(error.message)
    }
}