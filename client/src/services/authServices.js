import { getToken } from "../utils/utils";
import api from './api.js'

export const login = async (username, password) => {
    try {
        const response = await api.post('/auth/login', { username, password })
        const data = response.data
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