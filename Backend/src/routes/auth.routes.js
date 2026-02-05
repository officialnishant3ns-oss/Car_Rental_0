import { Router } from "express"
import { Register,Login, Logout } from "../controllers/auth.controller.js"
import verifyJWT from "../middleware/auth.middleware.js"

const router = Router()

router.post('/register',Register)
router.post('/login',Login)
router.post('/logout',verifyJWT,Logout)






export default router

