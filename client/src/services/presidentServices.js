import api from "./api.js";

/* export const getAllPresidents = async (page = 1, filters, search) => {
    try {
        let apiString = `/presidentes?limit=5&page=${page}`
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
} */

export const createPresident = async (president) => {
    try {
        const res = await api.post(`/presidentes`, president)
        const data = res.data
        return data
    } catch (error) {
        console.log(error)
    }
}