import dotenv from "dotenv";
import { get } from "http";

dotenv.config();


interface ENV_VARS { 
    MONGODB_URI: string
}

export const getEnv = (): ENV_VARS => { 
    return { 
        MONGODB_URI: process.env.MONGODB_URI!,
    }
}

export const config = getEnv()
