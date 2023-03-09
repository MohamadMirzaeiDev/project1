import mongoose from "mongoose";
import { createClient } from 'redis'
import configs from ".";

export function connectMongoDB(cb:(err:Error | undefined , info:string | undefined)=>void){
    mongoose.connect(configs.MONGODB_URI!)
    .then(result=>{
        if(!result){
            cb(new Error('not connect to mongoDB') , undefined)
            return ;
        }
        cb(undefined , 'connect to mongoDB !')
    })
    .catch(err=>{
        cb(err , undefined)
    })
}


export const client = createClient({url : configs.REDIS_URI})
export function connectRedis(cb:(err:Error | undefined , info:string | undefined)=>void){
    client.connect()
    .then(result=>{
        cb(undefined , 'connect to redis !')
    })
    .catch(err=>{
        cb(err , undefined)
    })
}
