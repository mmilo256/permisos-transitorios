import e from 'express'
import { createOrganization, getAllOrganizations, getOrganizationById, updateOrganization, deleteOrganization, getAllDocuments, uploadDocs, getOrganizationByRut } from './organizationsController.js'

const router = e.Router()

router.get("/", getAllOrganizations)
router.get("/rut", getOrganizationByRut)
router.get("/:id", getOrganizationById)
router.get("/:id/documents", getAllDocuments)
router.patch("/:id", updateOrganization)
router.patch("/:id/delete", deleteOrganization)
router.post("/", createOrganization)
router.post("/:id/upload", uploadDocs)

export default router