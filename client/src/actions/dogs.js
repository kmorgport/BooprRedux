import { ADD_PUP_PIC, FETCH_ALL, FETCH_DOG, CREATE, UPDATE, BOOP, DELETE, START_LOADING, END_LOADING, FETCH_BY_SEARCH} from '../constants/actionTypes';
import * as api from '../api';

export const fetchDogs = () => async (dispatch) =>{
    try{
        dispatch({type: START_LOADING });
        const { data:{data} } = await api.fetchDogs();
        
        dispatch({ type: FETCH_ALL, payload: {data}})
        dispatch({type: END_LOADING });

    }catch(error){
        console.log(error.message)
    }
}

export const fetchDog = (id) => async (dispatch) =>{
    try{
        dispatch({type:START_LOADING});
        const {data} = await api.fetchDog(id);
        dispatch({type:FETCH_DOG, payload:{ dog: data }})
        dispatch({type: END_LOADING });
        
    } catch (error){
        console.log(error)
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

export const fetchDogsByOwner = (id) => async (dispatch) =>{

    try{
        dispatch({type:START_LOADING});
        const { data:{data} } = await api.fetchDogsByOwner(id);
        dispatch({ type: FETCH_ALL, payload: {data}})
        dispatch({type: END_LOADING });

    }catch(error){
        console.log(error)
    }
}

export const getDogsBySearch = (searchQuery)=> async (dispatch)=> {
    try{
        dispatch({ type: START_LOADING})
        const { data: {data} } = await api.fetchDogsBySearch(searchQuery)
        dispatch({
            type: FETCH_BY_SEARCH,
            payload: data
        })
        dispatch({ type: END_LOADING})
        
    }catch(error){
        console.log(error)
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

export const deleteDog = (id) => async (dispatch) =>{
    try{
        await api.deleteDog(id);

        dispatch({type: DELETE, payload: id})
    }catch(error){
        console.log(error)
    }
}

export const updateDog = (id, dog) => async (dispatch) => {
    try{
        const { data } = await api.updateDog(id, dog);

        dispatch({ type: UPDATE, payload: data})

    }catch (error){
        console.log(error)
    }
}

export const addPupPic = (id, pic) => async (dispatch)=>{
    try{
        const { data } = await api.addPupPic(id, pic);
        dispatch({type: ADD_PUP_PIC, payload: data })

    }catch(error){
        console.log(error)
    }
}