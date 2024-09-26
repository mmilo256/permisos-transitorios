import Permission from './permissionsModel.js'

export const getAllPermissions = async (req, res) => {
    try {
        const permissions = await Permission.findAll()
        res.status(200).json(permissions)
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