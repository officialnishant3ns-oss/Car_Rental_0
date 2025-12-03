import User from "../models/user.models.js"
import { registeruser } from "../controllers/user.controller.js"
import express from "express"
const router = express.Router()

router.post("/register", registeruser)

export default router