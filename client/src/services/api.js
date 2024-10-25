import axios from 'axios';
import { API_URL } from '../constants/constants';

// Crear una instancia de Axios
const api = axios.create({
    baseURL: API_URL, // Cambia a tu URL de la API
});

// Interceptor para verificar respuestas
api.interceptors.response.use(
    (response) => {
        // Si la respuesta es exitosa, no hacemos nada
        return response;
    },
    async (error) => {
        // Si el servidor responde con un error
        if (error.response && error.response.status === 403) {
            // Redirigir al login
            setTimeout(() => {
                window.location.href = "/"
            }, 100)
        }

        // Retornar el error para manejarlo en el componente que hace la petición
        return Promise.reject(error);
    }
);

// Exportar la instancia de Axios para usarla en otros archivos
export default api;
