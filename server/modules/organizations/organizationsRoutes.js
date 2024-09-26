import e from 'express'
import { createOrganization, getAllOrganizations, getOrganizationById } from './organizationsController.js'

const router = e.Router()

router.get("/", getAllOrganizations)
router.get("/:id", getOrganizationById)
router.post("/", createOrganization)

export default router