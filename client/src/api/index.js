import axios from 'axios';

const API = axios.create({
    baseURL: "http://localhost:5000"
})

API.interceptors.request.use((req)=>{
    if(localStorage.getItem('profile')){
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
})

export const fetchDogs = () => API.get(`/dogs`);

export const fetchDogsBySearch = (searchQuery) => API.get(`/dogs/fetch?searchQuery=${searchQuery.search||'none'}&tags=${searchQuery.breeds}`);

export const createDog = (newDog) => API.post('/dogs', newDog );
export const updateDog = ( id, updatedDog ) => API.patch(`/dogs/${id}`, updatedDog);
export const deleteDog = (id) =>API.delete(`/dogs/${id}`);
export const boopDog = (id) => API.patch(`/dogs/${id}/boopDog`)


export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);