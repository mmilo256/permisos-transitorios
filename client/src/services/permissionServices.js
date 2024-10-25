import { getToken } from "../utils/utils"
import api from "./api.js"

export const getPermissionById = async (id) => {
    const token = getToken()
    try {
        const res = await api.get(`/permisos/${id}`, { headers: { Authorization: `Bearer ${token}` } })
        const data = res.data
        return data
    } catch (error) {
        console.error(error.message)
    }
}

export const getAllPermissions = async (page = 1, orgId) => {
    const token = getToken()
    try {
        let apiString = `/permisos?organizationId=${orgId}&page=${page}&limit=5`
        const res = await api.get(apiString, { headers: { Authorization: `Bearer ${token}` } })
        const data = res.data
        return data
    } catch (error) {
        console.log(error)
    }
}
export const createPermission = async (permission) => {
    const token = getToken()
    try {
        const res = await api.post(`/permisos`, permission, { headers: { Authorization: `Bearer ${token}` } })
        const data = res.data
        return data
    } catch (error) {
        console.log(error)
    }
}