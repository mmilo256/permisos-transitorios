import e from 'express'
import { createApplication, getAllApplications } from './applicationController.js'

const router = e.Router()

router.get("/", getAllApplications)
router.post("/", createApplication)

export default router