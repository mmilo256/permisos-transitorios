import Organization from './organizationsModel.js'
import President from '../presidents/presidentsModel.js'
import { Op, Sequelize } from 'sequelize'

export const getAllOrganizations = async (req, res) => {
    try {
        const page = req.query.page || 1
        const limit = req.query.limit || 10
        const offset = (page - 1) * limit
        const filters = req.query.filters
        const search = req.query.search
        const whereClause = filters ? { org_type: filters } : {}
        const searchClause = search ? {
            [Op.or]: [
                {
                    org_name: {
                        [Sequelize.Op.like]: `%${search}%`
                    }
                },
                {
                    org_rut: {
                        [Sequelize.Op.like]: `%${search}%`
                    }
                }
            ]
        } : {}
        // Obtener las organizaciones con paginación
        const { count, rows } = await Organization.findAndCountAll({
            limit,
            offset,
            where: { active: true, ...whereClause, ...searchClause },
            attributes: ["id", "org_rut", "org_name", "org_type"],
            include: { model: President, attributes: ["name"] },
        });
        // Calcular el total de páginas
        const totalPages = Math.ceil(count / limit);
        res.status(200).json({
            totalItems: count,
            totalPages: totalPages,
            currentPage: page,
            organizations: rows,
        })
    } catch (error) {
        console.log(error)
    }
}

export const getOrganizationById = async (req, res) => {
    try {
        const { id } = req.params
        const organization = await Organization.findOne({
            where: { id },
            include: [President]
        })
        res.status(200).json(organization)
    } catch (error) {
        console.log(error)
    }
}
export const deleteOrganization = async (req, res) => {
    try {
        const { id } = req.params
        const updates = { active: false }
        await Organization.update(updates, { where: { id } })
        res.status(203).json({ msg: "Organización eliminada satisfactoriamente" })
    } catch (error) {
        console.log(error)
    }
}
export const updateOrganization = async (req, res) => {
    try {
        const { id } = req.params
        const updates = { ...req.body }
        await Organization.update(updates, { where: { id } })
        res.status(200).json(updates)
    } catch (error) {
        console.log(error)
    }
}

export const createOrganization = async (req, res) => {
    try {
        let docs
        if (req.files) {
            docs = req.files.map(file => (
                { file }
            ))
        }
        const newOrganization = await Organization.create({ ...req.body, docs })

        res.status(201).json(newOrganization)
    } catch (error) {
        console.log(error)
    }
}