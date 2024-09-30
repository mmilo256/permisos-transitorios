import axios from "axios"
import { API_URL } from '../constants/constants.js';

export const getAllOrganizations = async (page = 1) => {
    try {
        const res = await axios.get(`${API_URL}/api/organizaciones?limit=5&page=${page}`)
        const data = res.data
        return data
    } catch (error) {
        console.log(error)
    }
}