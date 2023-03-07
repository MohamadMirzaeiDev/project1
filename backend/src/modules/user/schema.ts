import { Schema , Document , model } from 'mongoose' ;

export interface User extends Document {
    name : string ;
    verfide : boolean ;
    phoneNumber : string ;
    email : {type : string  , };
}