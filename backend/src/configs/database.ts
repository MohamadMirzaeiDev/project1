import mongoose from "mongoose";
import configs from ".";

export function connect(cb:(err:Error | undefined , info:string | undefined)=>void){
    mongoose.connect(configs.DATABASE_URI!)
        .then(result=>{
            if(!result){
                cb(new Error('not connect to database') , undefined)
                return ;
            }
            cb(undefined , 'connect to database')
        })
        .catch(err=>{
            cb(err , undefined)
        })
}