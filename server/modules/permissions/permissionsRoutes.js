import e from 'express'
import { createPermission, getAllPermissions, getPermissionById, postAct, updatePermission } from './permissionsController.js'

const router = e.Router()

router.get("/", getAllPermissions)
router.get("/:id", getPermissionById)
router.post("/generar-decreto", postAct)
router.patch("/:id", updatePermission)
router.post("/", createPermission)

export default router