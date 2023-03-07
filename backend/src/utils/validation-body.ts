import {Request , Response , NextFunction} from 'express' ; 
import { validationResult } from 'express-validator';

function validationBody(req:Request,res:Response):boolean{
    const errors = validationResult(req); 

    if(!errors.isEmpty()){
        res.status(400).json({
            message : 'validation error' , 
            data : errors.array().map(err=>err.msg)
        })

        return false ;
    }

    return true ;
}


export function validate(req:Request,res:Response,next:NextFunction){
    if(!validationBody(req,res)){
        return ; 
    }
    next()
}