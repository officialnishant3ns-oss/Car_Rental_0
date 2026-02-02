import express, { Router } from 'express'
import cookieParser from "cookie-parser"
const app = express()

app.use(express.json({
    limit: "16kb"
}))
app.use(cookieParser()) 

import UserRouter from './routes/auth.routes.js'
app.use('/api/v1/user', UserRouter)

export default app
