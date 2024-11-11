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
            order: [['createdAt', 'DESC']],
            where: whereClause,
            attributes: ["id", "place", "org_name", "createdAt", "activity_name", "status"],
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
export const updateFolio = async (req, res) => {
    try {
        const { id } = req.params
        const { folio } = req.body
        await Request.update({ folio }, { where: { id } })
        res.status(200).json({ msg: `N° de folio: ${folio}` })
    } catch (error) {
        console.log(error)
    }
}

export const createRequest = async (req, res) => {
    try {
        const docs = req.files.map(file => (
            { file }
        ))
        const {
            org_name,
            org_rut,
            org_address,
            org_email,
            org_phone,
            org_type,
            owner_name,
            owner_rut,
            owner_address,
            owner_email,
            owner_phone,
            owner_phone2,
            activity_name,
            place,
            start_date,
            start_time,
            end_date,
            end_time,
            is_alcohol,
            is_food,
            description,
            purpose
        } = req.body
        const requestData = {
            org_name: org_name.toLowerCase(),
            org_rut: org_rut.toUpperCase(),
            org_address: org_address.toLowerCase(),
            org_email: org_email.toLowerCase(),
            org_phone,
            org_type: org_type.toLowerCase(),
            owner_name: owner_name.toLowerCase(),
            owner_rut: owner_rut.toUpperCase(),
            owner_address: owner_address.toLowerCase(),
            owner_email: owner_email.toLowerCase(),
            owner_phone,
            owner_phone2,
            activity_name: activity_name.toLowerCase(),
            place: place.toLowerCase(),
            start_date,
            start_time,
            end_date,
            end_time,
            is_alcohol,
            is_food,
            description: description.toLowerCase(),
            purpose: purpose.toLowerCase()
        }
        const newRequest = await Request.create({ ...requestData, docs })

        res.status(201).json(newRequest)
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: error.message })
    }
}