console.log("hello E-commerse")
import dotenv from 'dotenv'
dotenv.config(
    {
        path: './.env'
    }
)
import app from './app.js'



app.get('/api/v1', (req, res) => {
    res.send("Server is working fine E-commerse")
})

app.listen(process.env.PORT, () => {
    console.log(`Server is working on PORT ${process.env.PORT}`)
})  