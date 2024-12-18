import Organization from './organizationsModel.js'
import President from '../presidents/presidentsModel.js'
import { Op } from 'sequelize'
import { sequelize } from '../../config/db.js'
import Document from '../docs/docsModel.js'
import Permission from '../permissions/permissionsModel.js'

export const getAllDocuments = async (req, res) => {
    try {
        const { id } = req.params
        if (!id) {
            return res.status(400).json({ status: "error", message: "No se encontró la organización" })
        }
        const docs = await Document.findAll({ where: { organizationId: id, active: true } })
        res.status(200).json({ status: "success", message: "Se obtuvieron los documentos exitosamente", docs })
    } catch (error) {
        res.status(400).json({ status: "error", message: "No se pudo obtener los documentos", error })
    }
}

export const uploadDocs = async (req, res) => {
    try {
        // ID de la organización
        const { id } = req.params;

        if (!req.files || req.files.length === 0) {
            return res.status(400).json({ status: "error", message: "No se proporcionaron archivos" });
        }

        if (!id) {
            return res.status(400).json({ status: "error", message: "ID de la organización es requerido" });
        }

        const formattedDocs = req.files.map(file => {
            const { fieldname, originalname, filename, path } = file;
            return {
                fieldname,
                originalname,
                filename,
                path,
                organizationId: id
            };
        });

        const docs = await Document.bulkCreate(formattedDocs);
        res.status(200).json({ status: "success", message: "Documentos subidos exitosamente", docs });
    } catch (error) {
        res.status(400).json({ status: "error", message: "No se pudo subir los documentos", error: error.message });
    }
}

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
                        [Op.like]: `%${search}%`
                    }
                },
                {
                    org_rut: {
                        [Op.like]: `%${search}%`
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
        if (!organization) {
            return res.status(400).json({ status: "error", message: "La organización no existe" })
        }
        res.status(200).json({ status: "success", message: "Organización obtenida exitosamente", organization })
    } catch (error) {
        res.status(400).json({ status: "error", message: "No se pudo obtener la organización", error })
    }
}
export const getOrganizationByRut = async (req, res) => {
    try {
        const { rut } = req.query;
        const organization = await Organization.findOne({
            where: { org_rut: rut }
        });

        if (!organization) {
            return res.status(404).json({ status: "error", message: "La organización no existe" });
        }

        return res.status(200).json({ status: "success", message: "Organización obtenida exitosamente", organization });
    } catch (error) {
        console.error(error); // Para registrar el error en el servidor
        return res.status(500).json({ status: "error", message: "No se pudo obtener la organización" });
    }
};

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
        const {
            org_name,
            org_rut,
            org_address,
            org_email,
            org_phone,
            org_type,
            name,
            rut,
            address,
            email,
            phone,
            phone2
        } = req.body
        const updates = {}
        const updates2 = {}
        if (org_name) updates.org_name = org_name.toLowerCase()
        if (org_rut) updates.org_rut = org_rut.toUpperCase()
        if (org_address) updates.org_address = org_address.toLowerCase()
        if (org_email) updates.org_email = org_email.toLowerCase()
        if (org_phone) updates.org_phone = org_phone
        if (org_type) updates.org_type = org_type.toLowerCase()
        if (name) updates2.name = name.toLowerCase()
        if (rut) updates2.rut = rut.toUpperCase()
        if (address) updates2.address = address.toLowerCase()
        if (email) updates2.email = email.toLowerCase()
        if (phone) updates2.phone = phone.toLowerCase()
        if (phone2) updates2.phone2 = phone2.toLowerCase()

        const result = sequelize.transaction(async (t) => {
            const org = await Organization.update(updates, { transaction: t, where: { id } })
            const president = await President.update(updates2, { transaction: t, where: { id } })
            res.status(200).json({ message: "Organización modificada exitosamente", org, president })
        })
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
            org_name: org_name.toLowerCase(),
            org_rut: org_rut.toUpperCase(),
            org_address: org_address.toLowerCase(),
            org_email: org_email.toLowerCase(),
            org_phone,
            org_type: org_type.toLowerCase()
        };
        const presidentData = {
            name: name.toLowerCase(),
            rut: rut.toUpperCase(),
            address: address.toLowerCase(),
            email: email.toLowerCase(),
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