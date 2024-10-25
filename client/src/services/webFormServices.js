import api from './api.js';

export async function getAllApplications(page = 1) {
    try {
        const response = await api.get(`/solicitudes?limit=5&page=${page}`);
        const data = await response.data
        return data
    } catch (error) {
        console.error(error);
    }
}

export async function getApplicationById(id) {
    try {
        const response = await api.get(`/solicitudes/${id}`);
        const data = await response.data
        return data
    } catch (error) {
        console.error(error);
    }
}
export const updateRequest = async (id, status) => {
    try {
        const res = await api.patch(`/solicitudes/${id}`, { status })
        const data = await res.data
        return data
    } catch (error) {
        console.log(error)
    }
}

export const createApplication = async (data, config) => {
    try {
        await api.post(`/solicitudes`, data, config)
    } catch (error) {
        console.log(error)
    }
}