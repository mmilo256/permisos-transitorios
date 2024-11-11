import e from 'express'
import { createRequest, getAllRequests, getRequestById, updateFolio, updateRequest } from './requestsController.js'

const router = e.Router()

router.get("/", getAllRequests)
router.get("/:id", getRequestById)
router.patch("/:id", updateRequest)
router.patch("/:id/folio", updateFolio)
router.post("/", createRequest)

export default router