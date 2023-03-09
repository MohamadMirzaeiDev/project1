import { Schema , Document , model } from 'mongoose' ;

export interface IUser extends Document {
    id : string 
    name : string 
    username : string 
    phone_number : string
    email : string
    password : string 
    created_at : Date
    updated_at : Date
}

const UserSchema:Schema = new Schema({
    name : {
        type : String , 
    },
    username : {
        type : String , 
        unique : true ,
        sparse : true  
    },
    phone_number : {
        type : String , 
        unique : true ,
        sparse : true 
    } , 
    email : {
        type : String , 
        unique : true , 
        sparse : true  
    },
    password : {
        type : String , 
    } , 
    verifyed : {
        type : Boolean , 
        default : false
    },
    role: {
        type : String ,
        enum : ['customer','driver']
    }
}, {timestamps : true });

export const User = model<IUser>('User' , UserSchema);
