import { config } from 'dotenv';

config()

export default {
    JWT_SECRET_KEY : process.env.JWT_SECRET_KEY , 
    TOKEN_EXPIRE : process.env.TOKEN_EXPIRE , 
    MONGODB_URI : process.env.MONGODB_URI , 
    REDIS_URI: process.env.REDIS_URI
}