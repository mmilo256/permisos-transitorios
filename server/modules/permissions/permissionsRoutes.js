import e from 'express'
import { createPermission, getAllPermissions, getPermissionById, updatePermission } from './permissionsController.js'

const router = e.Router()

router.get("/", getAllPermissions)
router.get("/:id", getPermissionById)
router.patch("/:id", updatePermission)
router.post("/", createPermission)

export default router