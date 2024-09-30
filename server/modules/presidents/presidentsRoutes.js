import e from 'express'
import { createPresident, getPresidentByOrganization } from './presidentsController.js'

const router = e.Router()

router.get("/", getPresidentByOrganization)
router.post("/", createPresident)

export default router