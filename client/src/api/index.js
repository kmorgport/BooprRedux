import axios from 'axios';

const API = axios.create({
    baseURL: "http://localhost:5000"
})

export const fetchDogs = () => API.get(`/dogs`);

export const createDog = (newDog) => API.post('/dogs', newDog );
export const updateDog = ( id, updatedDog ) => API.patch(`/dogs/${id}`, updatedDog);
export const deleteDog = (id) =>API.delete(`/dogs/${id}`);
export const boopDog = (id) => API.patch(`/dogs/${id}/boopDog`)


export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);