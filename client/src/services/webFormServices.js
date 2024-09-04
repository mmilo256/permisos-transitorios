import axios from 'axios'

export async function getAllApplications() {
    try {
        const response = await axios.get('http://localhost:3000/api/solicitudes');
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

export const createApplication = async (data) => {
    try {
        axios.post('http://localhost:3000/api/solicitudes', data)
    } catch (error) {
        console.log(error)
    }
}