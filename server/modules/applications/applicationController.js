import Application from "./applicationModel.js"

export const getAllApplications = async (req, res) => {
    try {
        const applications = await Application.findAll()
        res.status(200).json(applications)
    } catch (error) {
        console.log(error)
    }
}

export const createApplication = async (req, res) => {
    try {
        const newApplication = await Application.create({ ...req.body })
        res.status(201).json(newApplication)
    } catch (error) {
        console.log(error)
    }
}