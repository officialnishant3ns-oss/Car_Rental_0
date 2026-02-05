import { Router } from "express"
import { AddCar, getCarByid, updateCar,deleteCar } from "../controllers/car.controller.js"
import  verifyJWT  from '../middleware/auth.middleware.js'
const router = Router()

router.post('/addcar',verifyJWT,AddCar)
router.post('/updatecar/:id',verifyJWT,updateCar)
router.post('/deletecar',verifyJWT,deleteCar)



export default router