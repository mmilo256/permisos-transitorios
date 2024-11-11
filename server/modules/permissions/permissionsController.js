import { generateAct } from '../../templates/generarDecreto.js'
import Organization from '../organizations/organizationsModel.js'
import Permission from './permissionsModel.js'

export const createPermission = async (req, res) => {
    try {
        // Obtener los datos del cuerpo de la petición
        const {
            org_name,
            org_rut,
            owner_name,
            owner_rut,
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
        // Obtener ID de la organización a la que pertenece el permiso
        const org = await Organization.findOne({ attributes: ["id"], where: { org_rut } })
        const organizationId = org ? org.id : null
        // Datos del decreto
        const actData = {
            org_name,
            org_rut,
            owner_name,
            owner_rut,
            activity_name,
            place,
            start_date,
            start_time,
            end_date,
            end_time,
        }
        // Datos del permiso
        const permissionData = {
            activity_name: activity_name.toLowerCase(),
            place: place.toLowerCase(),
            start_date,
            start_time,
            end_date,
            end_time,
            is_alcohol,
            is_food,
            description: description.toLowerCase(),
            purpose: purpose.toLowerCase(),
            organizationId
        }
        const formattedData = generateAct(actData)
        const newPermission = await Permission.create({ ...permissionData, act_doc: formattedData })
        res.status(200).json({ message: "El permiso se generó exitosamente", permission: newPermission, act: formattedData })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

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

export const updatePermission = async (req, res) => {
    try {
        const { id } = req.params
        const {
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
        const updates = {}
        if (activity_name) updates.activity_name = activity_name.toLowerCase()
        if (place) updates.place = place.toLowerCase()
        if (start_date) updates.start_date = start_date
        if (start_time) updates.start_time = start_time
        if (end_date) updates.end_date = end_date
        if (end_time) updates.end_time = end_time
        if (is_alcohol) updates.is_alcohol = is_alcohol
        if (is_food) updates.is_food = is_food
        if (description) updates.description = description.toLowerCase()
        if (purpose) updates.purpose = purpose.toLowerCase()

        await Permission.update(updates, { where: { id } })
        res.status(200).json(updates)
    } catch (error) {
        console.log(error)
    }
}

export const getPermissionById = async (req, res) => {
    try {
        const { id } = req.params
        const permission = await Permission.findOne({ where: { id } })
        res.status(200).json({ message: "Permiso obtenido exitosamente", permission })
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: "No se pudo obtener el permiso", error: error.message })
    }
}