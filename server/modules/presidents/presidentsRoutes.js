import e from 'express'
import { createPresident, getAllPresidents, getPresidentById } from './presidentsController.js'

const router = e.Router()

router.get("/", getAllPresidents)
router.get("/:id", getPresidentById)
router.post("/", createPresident)

export default router