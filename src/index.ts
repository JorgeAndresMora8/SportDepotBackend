import express from 'express'
import { ShoeRouter } from './routes/shoes'
import { AuthRouter } from './routes/auth'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())
app.use('/shoes', ShoeRouter)


app.get('/', (req, res) => { 
    res.send('Hello, World!')
})

app.listen(3000, () => {
    console.log('Server is running on port 3000 using nodemon...')
})