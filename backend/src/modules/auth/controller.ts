import { Request , Response } from 'express' ; 
import service from './service';

// login phone number ; 
export async function phoneLogin(req:Request,res:Response){
    const { phone_number } = req.body ; 

    const result = await service.phoneNumberLogin(phone_number);
    console.log(result);

    res.send(result)
}
