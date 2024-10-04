import Document from "./docsModel.js";

export const removeDocument = async (req, res) => {
    try {
        const { id } = req.params
        await Document.update({ active: false }, { where: { id } })
        res.status(200).json({ status: "success", message: "Documento borrado exitosamente" })
    } catch (error) {
        res.status(400).json({ status: "error", message: "No se pudo borrar el documento", error })
    }
}

export const getDocumentById = async (req, res) => {
    try {
        const { id } = req.params
        const doc = await Document.findByPk(id)
        if (!doc || !doc.active) {
            return res.status(400).json({ status: "error", message: "El documento no existe" })
        }
        res.status(200).json({ status: "success", message: "Se obtuvo el documento exitosamente", doc })
    } catch (error) {
        res.status(400).json({ status: "error", message: "No se pudo obtener los documentos", error })
    }
}

/* export const getAllDocumentsByOrg = async (req, res) => {
    try {
        const { id } = req.params
    } catch (error) {
        res.status(400).json({ status: "error", message: "No se pudo obtener los documentos", error })
    }
} */


