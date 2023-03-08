import { Schema , Document , model } from 'mongoose' ;

export interface IUser extends Document {
    name : string 
    username : string 
    email : string
    password : string 
    phone_number : string 
    created_at : Date
    updated_at : Date
}

const UserSchema:Schema = new Schema({
    name : {
        type : String , 
    },
    username : {
        type : String , 
        required : true 
    },
    email : {
        type : String , 
        unique : true , 
    },
    password : {
        type : String , 
    }
}, {timestamps : true });

export const User = model<IUser>('User' , UserSchema);
