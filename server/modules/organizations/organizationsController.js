import Organization from './organizationsModel.js'
import President from '../presidents/presidentsModel.js'
import Permission from '../permissions/permissionsModel.js'

export const getAllOrganizations = async (req, res) => {
    try {
        const organizations = await Organization.findAll({ include: { model: President, attributes: ["name"] } })
        res.status(200).json(organizations)
    } catch (error) {
        console.log(error)
    }
}

export const getOrganizationById = async (req, res) => {
    try {
        const { id } = req.params
        const organization = await Organization.findOne({
            where: { id },
            include: [President, Permission]
        })
        res.status(200).json(organization)
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