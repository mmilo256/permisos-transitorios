import Permission from './permissionsModel.js'

export const getAllPermissions = async (req, res) => {
    try {
        const { organizationId } = req.query
        const page = req.query.page || 1
        const limit = req.query.limit || 10
        const offset = (page - 1) * limit
        // Obtener los permisos con paginación
        const { count, rows } = await Permission.findAndCountAll({
            limit,
            offset,
            where: { organizationId, active: true }
        });
        // Calcular el total de páginas
        const totalPages = Math.ceil(count / limit);
        res.status(200).json({
            totalItems: count,
            totalPages: totalPages,
            currentPage: page,
            permissions: rows,
        })
    } catch (error) {
        console.log(error)
    }
}

export const getPermissionById = async (req, res) => {
    try {
        const { id } = req.params
        const permission = await Permission.findOne({ where: { id } })
        res.status(200).json(permission)
    } catch (error) {
        console.log(error)
    }
}

export const createPermission = async (req, res) => {
    try {
        const newPermission = await Permission.create({ ...req.body })

        res.status(201).json(newPermission)
    } catch (error) {
        console.log(error)
    }
}