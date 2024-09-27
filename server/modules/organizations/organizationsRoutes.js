import e from 'express'
import { createOrganization, getAllOrganizations, getOrganizationById, updateOrganization, deleteOrganization } from './organizationsController.js'

const router = e.Router()

router.get("/", getAllOrganizations)
router.get("/:id", getOrganizationById)
router.patch("/:id", updateOrganization)
router.patch("/:id/delete", deleteOrganization)
router.post("/", createOrganization)

export default router