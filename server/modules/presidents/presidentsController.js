import President from './presidentsModel.js'

export const getAllPresidents = async (req, res) => {
    try {
        const presidents = await President.findAll()
        res.status(200).json(presidents)
    } catch (error) {
        console.log(error)
    }
}

export const getPresidentById = async (req, res) => {
    try {
        const { id } = req.params
        const president = await President.findOne({ where: { id } })
        res.status(200).json(president)
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