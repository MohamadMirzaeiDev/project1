import { config } from 'dotenv';

config()

export default {
    JWT_SECRET_KEY : process.env.JWT_SECRET_KEY , 
    TOKEN_EXPIRE : process.env.TOKEN_EXPIRE , 
    DATABASE_URI : process.env.DATABASE_URI , 
    REDIS_URI: process.env.REDIS_URI
}