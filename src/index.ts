import cors from 'cors'
import express from 'express'
import { ShoeRouter } from './routes/shoes'
import { config } from './config/config'
import { AuthRouter } from './routes/auth'
import cookieParser from 'cookie-parser'
import { ReviewRouter } from './routes/review'
import { Server } from "socket.io"
import { PaymentRouter } from './routes/payment'
import http from 'http'
import { reviewService } from './Arquitecture/Review/ReviewService'

const app = express()
app.use(cors({
    origin: '*',  // React app URL
    credentials: true,               // Allow cookies to be sent with requests
  }));
app.use(express.json())
app.use(cookieParser())
app.use('/shoes', ShoeRouter)
app.use('/auth', AuthRouter)
app.use('/payment', PaymentRouter)
app.use('/review', ReviewRouter)

const PORT = process.env.PORT || 3000


app.get('/', (req, res) => { 
    res.send('Hello, World!')
})

const server = http.createServer(app)

server.listen(3000, () => { 
    console.log('Server is running on port 3000 using nodemon...')
})

const io = new Server(server, { 
    cors: {
        origin: '*',
        credentials: true,
    },
})

io.on("connection", (socket) => { 
    
    socket.on('send_message', async (data) => { 
        const productId = data.productId;
        await reviewService.createReview(data)
        const newList = await reviewService.getReviewsByProductId(productId)


        socket.emit("update_review", newList)
    })
})