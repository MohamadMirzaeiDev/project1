import { Request , Response } from 'express' ; 
import service from './service';

// login phone number ; 
export async function phoneLogin(req:Request,res:Response){
    const { phone_number } = req.body ; 

    const result = await service.phoneNumberLogin(phone_number);
    console.log(result);

    res.send(result)
}


export async function verifyPhoneNumber(req:Request,res:Response){
    const { phone_number , otp_code } = req.body ;

    const result = await service.verifyPhoneNumber(phone_number , otp_code);

    if(!result){
        console.log(result)
        return res.sendStatus(400)
    }

    res.send(result)
}