import express, { Router } from 'express'
const app = express()

app.use(express.json({
    limit: "16kb"
}))

import UserRouter from './routes/auth.routes.js'
app.use('/api/v1/user', UserRouter)

export default app
