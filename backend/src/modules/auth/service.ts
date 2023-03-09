import jwt from 'jsonwebtoken';
import userService from '../user/service';
import { client } from '../../configs/database';
import { Payload, Token } from './interface';
import configs from '../../configs';

export default new class Service{

    private generateOTP(length:number):string{
        const digits = '0123456789';
        let otp = '';
      
        for (let i = 0; i < length; i++) {
          otp += digits[Math.floor(Math.random() * 10)];
        }
      
        return otp;
    }
    
    private async signToken(payload:Payload):Promise<Token>{
        return await jwt.sign(
            payload , 
            configs.JWT_SECRET_KEY! , 
            {expiresIn : configs.TOKEN_EXPIRE}
        )
    }
    
    async phoneNumberLogin(phone_number:string):Promise<{} | null>{
        const user = await userService.findByPhoneNumber(phone_number);

        if(user){
            const otp = this.generateOTP(4)
            await client.set(user.phone_number , otp , {EX : 5000})
            return { otp_code :otp , phone_number : user.phone_number }
        }

        const otp = this.generateOTP(4)
        const newUser = await userService.createUser({phone_number})
        await client.set(newUser.phone_number , otp , {EX : 5000})
        return { otp_code : this.generateOTP(4) , phone_number : newUser.phone_number }
    }
    
    async verifyPhoneNumber(phone_number:string, otp_code:string):Promise<{access_token:string}| null>{
        const cachedOTP = await client.get(phone_number);
        const user = await userService.findByPhoneNumber(phone_number);

        if(!cachedOTP){
            return null ;
        }
        if(cachedOTP !== otp_code){
            return null 
        }
        if(!user){
            return null
        }

        return {access_token : await this.signToken({userId : user.id})}
    }
}