import * as api from '../api';

export const fetchDogs = () => async (dispatch) =>{
    try{

        const { data } = await api.fetchDogs();
        dispatch({ type: "FETCH_ALL", payload: data})

    }catch(error){
        console.log(error.message)
    }

}