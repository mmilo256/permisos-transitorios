import { getToken } from "../utils/utils.js";
import api from "./api.js";

export const getAllOrganizations = async (page = 1, filters, search) => {
    const token = getToken()
    try {
        let apiString = `/organizaciones?limit=5&page=${page}`
        if (filters) {
            apiString += `&filters=${filters}`
        }
        if (search) {
            apiString += `&search=${search}`
        }
        const res = await api.get(apiString, { headers: { Authorization: `Bearer ${token}` } })
        const data = res.data
        return data
    } catch (error) {
        console.log(error)
    }
}
export const getOrgByRut = async (rut) => {
    const token = getToken()
    try {
        const res = await api.get(`/organizaciones/rut?rut=${rut}`, { headers: { Authorization: `Bearer ${token}` } });
        return res.data; // Devuelve directamente los datos si la solicitud fue exitosa
    } catch (error) {
        // Manejo de errores
        let errorMessage = 'Error desconocido';

        if (error.response) {
            // El servidor respondió con un estado fuera del rango 2xx
            errorMessage = error.response.data.message || 'Error en la respuesta del servidor';
        } else if (error.request) {
            // La solicitud fue hecha, pero no se recibió respuesta
            errorMessage = 'No se recibió respuesta del servidor';
        } else {
            // Ocurrió un error al configurar la solicitud
            errorMessage = error.message;
        }

        console.log(errorMessage); // Registrar el mensaje de error
        return { status: 'error', message: errorMessage }; // Retornar un objeto con el error
    }

};
export const removeDocument = async (id) => {
    const token = getToken()
    try {
        const res = await api.patch(`/documentos/${id}`, { headers: { Authorization: `Bearer ${token}` } })
        const data = res.data
        return data
    } catch (error) {
        console.log(error)
    }

}

export const getDocsById = async (id) => {
    const token = getToken()
    try {
        const res = await api.get(`/organizaciones/${id}/documents`, { headers: { Authorization: `Bearer ${token}` } })
        const data = res.data
        return data
    } catch (error) {
        console.log(error)
    }

}
export const uploadDocs = async (id, docs) => {
    const token = getToken()
    console.log(token)
    try {
        const res = await api.post(`/organizaciones/${id}/upload`, docs, {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${token}`
            }
        })
        const data = res.data
        return data
    } catch (error) {
        console.log(error)
    }

}

export const getOrgById = async (id) => {
    const token = getToken()
    try {
        const res = await api.get(`organizaciones/${id}`, { headers: { Authorization: `Bearer ${token}` } })
        const data = res.data
        return data
    } catch (error) {
        console.log(error)
    }
}

export const createOrganization = async (organization) => {
    const token = getToken()
    try {
        const res = await api.post(`organizaciones`, organization, { headers: { Authorization: `Bearer ${token}` } })
        const data = res.data
        return data
    } catch (error) {
        console.log(error)
    }
}