import axios from 'axios'
import { API_URL } from '../constants/constants.js';

export async function getAllApplications() {
    try {
        const response = await axios.get(`${API_URL}/solicitudes`);
        const data = await response.data
        return data
    } catch (error) {
        console.error(error);
    }
}

export async function getApplicationById(id) {
    try {
        const response = await axios.get(`${API_URL}/solicitudes/${id}`);
        const data = await response.data
        return data
    } catch (error) {
        console.error(error);
    }
}

export const createApplication = async (data, config) => {
    try {
        await axios.post(`${API_URL}/solicitudes`, data, config)
    } catch (error) {
        console.log(error)
    }
}