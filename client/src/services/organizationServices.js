import axios from "axios"
import { API_URL } from '../constants/constants.js';

export const getAllOrganizations = async (page = 1, filters, search) => {
    try {
        let apiString = `${API_URL}/api/organizaciones?limit=5&page=${page}`
        if (filters) {
            apiString += `&filters=${filters}`
        }
        if (search) {
            apiString += `&search=${search}`
        }
        const res = await axios.get(apiString)
        const data = res.data
        return data
    } catch (error) {
        console.log(error)
    }
}