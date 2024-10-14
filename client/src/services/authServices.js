import { API_URL } from "../constants/constants";
import axios from 'axios'
import { jwtDecode } from 'jwt-decode'
import { getToken } from "../utils/utils";

export const login = async (username, password) => {
    try {
        const response = await axios.post(`${API_URL}/api/auth/login`, { username, password })
        const data = response.data
        const token = jwtDecode(data.token)
        console.log(token)
        if (!localStorage.getItem('jwt')) {
            localStorage.setItem('jwt', data.token)
        }
    } catch (error) {
        console.log(error.message)
    }
};

export const logout = async () => {
    const token = getToken()
    try {
        if (token) {
            localStorage.removeItem('jwt')
        }
    } catch (error) {
        console.log(error.message)
    }
}