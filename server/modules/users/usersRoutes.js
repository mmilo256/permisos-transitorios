import e from 'express'
import { login, register } from './usersController.js'

const router = e.Router()

router.post("/register", register)
router.post("/login", login)

export default router