import { Router } from "express"
import { AddCar } from "../controllers/car.controller.js"
import  verifyJWT  from '../middleware/auth.middleware.js'
const router = Router()

router.post('/addcar',verifyJWT,AddCar)


export default router