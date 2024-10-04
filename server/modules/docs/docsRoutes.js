import e from 'express'
import { getDocumentById, removeDocument } from './docsController.js'

const router = e.Router()

router.get("/:id", getDocumentById)
router.patch("/:id", removeDocument)

export default router