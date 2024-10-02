import President from './presidentsModel.js'

export const getPresidentByOrganization = async (req, res) => {
    try {
        const { organizationId } = req.query
        const president = await President.findOne({ where: { organizationId } })
        res.status(200).json(president)
    } catch (error) {
        console.log(error)
    }
}
export const updatePresident = async (req, res) => {
    try {
        const { id } = req.params
        const updates = { ...req.body }
        await President.update(updates, { where: { id } })
        res.status(200).json(updates)
    } catch (error) {
        console.log(error)
    }
}
export const createPresident = async (req, res) => {
    try {
        const newPresident = await President.create({ ...req.body })
        res.status(201).json(newPresident)
    } catch (error) {
        console.log(error)
    }
}