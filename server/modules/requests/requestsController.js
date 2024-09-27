import Request from "./requestsModel.js"

export const getAllRequests = async (req, res) => {
    try {
        const requests = await Request.findAll({ attributes: ["id", "org_name", "activity_name", "place", "start_date"] })
        res.status(200).json(requests)
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

export const createRequest = async (req, res) => {
    try {
        const docs = req.files.map(file => (
            { file }
        ))
        const newRequest = await Request.create({ ...req.body, docs })

        res.status(201).json(newRequest)
    } catch (error) {
        console.log(error)
    }
}