import { Request , Response } from 'express' ; 
import service from './service';


// login phone number ; 
export function phoneLogin(req:Request,res:Response){
    res.send(service.generate())
}
