import { Router } from "express"
import { AddCar, updateCar } from "../controllers/car.controller.js"
import  verifyJWT  from '../middleware/auth.middleware.js'
const router = Router()

router.post('/addcar',verifyJWT,AddCar)
router.post('/updatecar/:id',verifyJWT,updateCar)


export default router