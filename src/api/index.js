import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:3006/item'
});

export function getItems(path) {
    return API.get(path)
};