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
const allowedOrigins = ['http://localhost:5173', 'https://shiny-daffodil-1739fe.netlify.app'];

const corsOptions = {
  origin: (origin:any, callback:any) => {
    if (!origin || allowedOrigins.includes(origin)) {
      // Si el origen está permitido
      callback(null, origin);
    } else {
      // Si el origen no está permitido
      callback(new Error('No permitido por CORS'));
    }
  },
  credentials: true, // Permitir credenciales (cookies, headers de autenticación, etc.)
};

app.use(cors(corsOptions));


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

// Configuración de Socket.IO con múltiples orígenes
const io = new Server(server, {
    cors: {
      origin: [
        'http://localhost:5173', // Origen local (para desarrollo)
        'https://shiny-daffodil-1739fe.netlify.app',   // Origen de producción
      ],
      methods: ['GET', 'POST'], // Métodos permitidos
      credentials: true,        // Permitir envío de cookies/credenciales
    },
  });

io.on("connection", (socket) => { 
    
    socket.on('send_message', async (data) => { 
        const productId = data.productId;
        await reviewService.createReview(data)
        const newList = await reviewService.getReviewsByProductId(productId)


        socket.emit("update_review", newList)
    })
})