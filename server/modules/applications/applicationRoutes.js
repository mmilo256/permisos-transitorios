import e from 'express'
import { createApplication, getAllApplications, getApplicationById } from './applicationController.js'

const router = e.Router()

router.get("/", getAllApplications)
router.get("/:id", getApplicationById)
router.post("/", createApplication)

export default router