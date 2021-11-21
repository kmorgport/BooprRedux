import axios from 'axios';

const API = axios.create({
    baseURL: "http://localhostL:5000"
})

export const fetchDogs = () => API.get(`/dogs`)

export const createDog = (newDog) => API.post('/dogs', newDog )