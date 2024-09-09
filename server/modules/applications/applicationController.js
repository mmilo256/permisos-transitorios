import Application from "./applicationModel.js"

export const getAllApplications = async (req, res) => {
    try {
        const applications = await Application.findAll({ attributes: ["id", "org_name", "activity_name", "place", "start_date"] })
        res.status(200).json(applications)
    } catch (error) {
        console.log(error)
    }
}

export const getApplicationById = async (req, res) => {
    try {
        const { id } = req.params
        const application = await Application.findOne({ where: { id } })
        res.status(200).json(application)
    } catch (error) {
        console.log(error)
    }
}

export const createApplication = async (req, res) => {
    try {
        const docs = req.files.map(file => (
            { file }
        ))
        const newApplication = await Application.create({ ...req.body, docs })

        res.status(201).json(newApplication)
    } catch (error) {
        console.log(error)
    }
}