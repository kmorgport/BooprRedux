import { FETCH_ALL,CREATE, BOOP } from '../constants/actionTypes';
import * as api from '../api';

export const fetchDogs = () => async (dispatch) =>{
    try{

        const { data } = await api.fetchDogs();
        dispatch({ type: FETCH_ALL, payload: data})

    }catch(error){
        console.log(error.message)
    }
}

export const createDog = (newDog) => async (dispatch) => {

    try{
        const { data } = await api.createDog(newDog)

        dispatch({ type: CREATE, payload: data })
    }catch(error){
        console.log(error.message)
    }

}

export const boopDog = (id)=> async (dispatch)=>{
    const user = JSON.parse(localStorage.getItem('profile'));

    try{
        const { data } = await api.boopDog(id, user?.token);
        
        dispatch({ type: BOOP, payload: data});

    }catch (error){
        console.log(error)
    }
}