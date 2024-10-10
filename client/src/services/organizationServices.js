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
export const getOrgByRut = async (rut) => {
    try {
        const res = await axios.get(`${API_URL}/api/organizaciones/rut?rut=${rut}`);
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
    try {
        const res = await axios.patch(`${API_URL}/api/documentos/${id}`)
        const data = res.data
        return data
    } catch (error) {
        console.log(error)
    }
}

export const getDocsById = async (id) => {
    try {
        const res = await axios.get(`${API_URL}/api/organizaciones/${id}/documents`)
        const data = res.data
        return data
    } catch (error) {
        console.log(error)
    }
}
export const uploadDocs = async (id, docs) => {
    try {
        const res = await axios.post(`${API_URL}/api/organizaciones/${id}/upload`, docs, {
            headers: { 'Content-Type': 'multipart/form-data' }
        })
        const data = res.data
        return data
    } catch (error) {
        console.log(error)
    }
}

export const getOrgById = async (id) => {
    try {
        const res = await axios.get(`${API_URL}/api/organizaciones/${id}`)
        const data = res.data
        return data
    } catch (error) {
        console.log(error)
    }
}

export const createOrganization = async (organization) => {
    try {
        const res = await axios.post(`${API_URL}/api/organizaciones`, organization)
        const data = res.data
        return data
    } catch (error) {
        console.log(error)
    }
}