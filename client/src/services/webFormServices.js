import axios from 'axios'

export async function getAllApplications() {
    try {
        const response = await axios.get('http://localhost:3000/api/solicitudes');
        const data = await response.data
        return data
    } catch (error) {
        console.error(error);
    }
}

export async function getApplicationById(id) {
    try {
        const response = await axios.get(`http://localhost:3000/api/solicitudes/${id}`);
        const data = await response.data
        return data
    } catch (error) {
        console.error(error);
    }
}

export const createApplication = async (data, config) => {
    try {
        axios.post('http://localhost:3000/api/solicitudes', data, config)
    } catch (error) {
        console.log(error)
    }
}