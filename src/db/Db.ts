import mongoose from "mongoose"
import { config } from "../config/config"

export const connectDB = async () => { 
    try {
        await mongoose.connect('mongodb+srv://jorgeandresmm2002:jorgemora2002@cluster0.9w0gf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    } catch (error) {
        console.error(`Error connecting to MongoDB ${error}`)
        process.exit(1)
    }
}