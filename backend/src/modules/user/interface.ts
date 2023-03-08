export interface ICreateUser {
    phone_number : string ,
}

export interface IUpdateUser {
    name? : string 
    username? : string 
    email? : string 
    password? : string  
}