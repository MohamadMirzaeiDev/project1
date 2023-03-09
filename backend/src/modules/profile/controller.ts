import { Request , Response } from 'express';

export function index(req:Request,res:Response){
    res.send(req.user)
}

export function update(req:Request,res:Response){
    const { name , email , password , username } =  req.body ; 
    
}