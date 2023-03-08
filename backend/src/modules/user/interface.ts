export interface ICreateUser {
    phone_number : string ,
    otp_code : string 
}

export interface IUpdateUser {
    name? : string 
    username? : string 
    email? : string 
    password? : string  
    otp_code? : string
}