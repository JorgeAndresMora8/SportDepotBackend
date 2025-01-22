"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const shoes_1 = require("./routes/shoes");
const auth_1 = require("./routes/auth");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const review_1 = require("./routes/review");
const socket_io_1 = require("socket.io");
const payment_1 = require("./routes/payment");
const http_1 = __importDefault(require("http"));
const ReviewService_1 = require("./Arquitecture/Review/ReviewService");
const app = (0, express_1.default)();
const allowedOrigins = ['http://localhost:5173', 'https://shiny-daffodil-1739fe.netlify.app'];
const corsOptions = {
    origin: '*'
};
// app.options('*', cors(corsOptions)); // Handle preflight requests
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use('/shoes', shoes_1.ShoeRouter);
app.use('/auth', auth_1.AuthRouter);
app.use('/payment', payment_1.PaymentRouter);
app.use('/review', review_1.ReviewRouter);
const PORT = process.env.PORT || 3000;
app.get('/', (req, res) => {
    res.send('Hello, World!');
});
const server = http_1.default.createServer(app);
server.listen(3000, () => {
    console.log('Server is running on port 3000 using nodemon...');
});
const io = new socket_io_1.Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST'],
    },
});
io.on("connection", (socket) => {
    socket.on('send_message', (data) => __awaiter(void 0, void 0, void 0, function* () {
        const productId = data.productId;
        yield ReviewService_1.reviewService.createReview(data);
        const newList = yield ReviewService_1.reviewService.getReviewsByProductId(productId);
        socket.emit("update_review", newList);
    }));
});
// const corsOptions = {
//   // origin: (origin:any, callback:any) => {
//   //   if (!origin || allowedOrigins.includes(origin)) {
//   //     // Si el origen está permitido
//   //     callback(null, origin);
//   //   } else {
//   //     // Si el origen no está permitido
//   //     callback(new Error('No permitido por CORS'));
//   //   }
//   // },
//   origin:'*', 
//   // credentials: true, // Permitir credenciales (cookies, headers de autenticación, etc.)
// };
