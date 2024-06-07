import axios from 'axios'

const API_URL = 'http://localhost:5000/api';

export const getRoutes = async () => {
    return await axios.get(`${API_URL}/routes`);
};

export const createRoute = async (route) => {
    return await axios.post(`${API_URL}/routes`, route);
};