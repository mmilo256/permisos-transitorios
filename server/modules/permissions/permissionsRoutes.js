import e from 'express'
import { createPermission, getAllPermissions, getPermissionById } from './permissionsController.js'

const router = e.Router()

router.get("/", getAllPermissions)
router.get("/:id", getPermissionById)
router.post("/", createPermission)

export default router