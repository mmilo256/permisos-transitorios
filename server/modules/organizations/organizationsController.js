import Organization from './organizationsModel.js'
import President from '../presidents/presidentsModel.js'
import { Op, Sequelize } from 'sequelize'
import { sequelize } from '../../config/db.js'

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
        const { org_name, org_rut, org_address, org_email, org_phone, org_type, name, rut, address, email, phone, phone2 } = req.body
        const orgExists = await Organization.findOne({ where: { org_rut } })
        if (orgExists) {
            return res.json({ status: "error", message: "La organización ya existe" })
        }
        const organizationData = {
            org_name,
            org_rut,
            org_address,
            org_email,
            org_phone,
            org_type
        };
        const presidentData = {
            name,
            rut,
            address,
            email,
            phone,
            phone2
        }
        const result = await sequelize.transaction(async (t) => {
            const newOrganization = await Organization.create(organizationData, { transaction: t })
            const newPresident = await President.create({ ...presidentData, organizationId: newOrganization.id }, { transaction: t })
            res.status(201).json({
                status: "success",
                message: "La organización se creo exitosamente",
                data: { org: newOrganization, president: newPresident }
            })
        })
    } catch (error) {
        res.json({ status: "error", message: "No se pudo crear la organización", error })
    }
}

/* export const createOrganization = async (req, res) => {
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
} */