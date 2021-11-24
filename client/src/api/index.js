import axios from 'axios';

const API = axios.create({
    baseURL: "http://localhost:5000"
})

export const fetchDogs = () => API.get(`/dogs`);

export const createDog = (newDog) => API.post('/dogs', newDog );

export const signIn = (formData) => API.post('/user/signin', formData);

export const signUp = (formData) => API.post('/user/signup', formData);