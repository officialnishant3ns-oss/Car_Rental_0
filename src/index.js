console.log("hello E-commerse")
import dotenv from 'dotenv'
dotenv.config(
    {
        path: './.env'
    }
)
import app from './app.js'
import connectdb from './db/db.js'
connectdb()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`server is ready at ${process.env.PORT}`);
        });
        app.on("error", (error) => {
            console.error("ERROR:", error)
            throw error
        })
    })
    .catch((error) => {
        console.log("Mongo_DB connection failed", error);
    });
    
    app.get('/api/v1',(_,res)=>{
        res.send('Welcome to the E-commerce App')
    })


