import * as api from '../api';
import { AUTH, GOOGLE } from '../constants/actionTypes';

export const signIn = (formData, navigate) => async (dispatch) => {
    try{
        const {data} = await api.signIn(formData);

        dispatch({type: AUTH, data})
        navigate('/')
    }catch(error){
        console.log(error)
    }
}

export const signUp = (formData, navigate) => async (dispatch) => {
    try{
        const { data } = await api.signUp(formData);

        dispatch({ type: AUTH, data})
        navigate('/')

    } catch(error){
        console.log(error)
    }
}

export const googleSignIn = (res, navigate) => async (dispatch)=>{
    try{

        const { data } = await api.googleSignIn(res);
        dispatch({ type: AUTH, data})
        navigate('/')

    }catch (error){
        console.log(error)
    }
}