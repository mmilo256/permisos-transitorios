import Request from "./requestsModel.js"

export const getAllRequests = async (req, res) => {
    try {
        const page = req.query.page || 1
        const limit = req.query.limit || 10
        const offset = (page - 1) * limit
        const filters = req.query.filters

        const whereClause = filters ? { status: filters } : {}
        // Obtener los permisos con paginación
        const { count, rows } = await Request.findAndCountAll({
            limit,
            offset,
            where: whereClause,
            attributes: ["id", "place", "org_name", "start_date", "activity_name", "status"],
        });
        // Calcular el total de páginas
        const totalPages = Math.ceil(count / limit);
        res.status(200).json({
            totalItems: count,
            totalPages: totalPages,
            currentPage: page,
            filters,
            requests: rows,
        })
    } catch (error) {
        console.log(error)
    }
}

export const getRequestById = async (req, res) => {
    try {
        const { id } = req.params
        const request = await Request.findOne({ where: { id } })
        res.status(200).json(request)
    } catch (error) {
        console.log(error)
    }
}

export const updateRequest = async (req, res) => {
    try {
        const { id } = req.params
        const { status } = req.body
        await Request.update({ status }, { where: { id } })
        res.status(200).json({ msg: `Estado cambiado a ${status}` })
    } catch (error) {
        console.log(error)
    }
}

export const createRequest = async (req, res) => {
    try {
        const docs = req.files.map(file => (
            { file }
        ))
        const newRequest = await Request.create({ ...req.body, docs })

        res.status(201).json(newRequest)
    } catch (error) {
        console.log(error)
    }
}