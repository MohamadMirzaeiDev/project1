import userService from '../user/service';
import { client } from '../../configs/database';

export default new class Service{

    private generateOTP(length:number):string{
        const digits = '0123456789';
        let otp = '';
      
        for (let i = 0; i < length; i++) {
          otp += digits[Math.floor(Math.random() * 10)];
        }
      
        return otp;
      }
    
    
    async phoneNumberLogin(phone_number:string):Promise<{} | null>{
        const user = await userService.findByPhoneNumber(phone_number);

        if(user){
            const otp = this.generateOTP(4)
            const userOTP = await client.set('userOTP' , user.phone_number+otp)
            console.log(userOTP)
            return { otp_code :otp , phone_number : user.phone_number }
        }

        const otp = this.generateOTP(4)
        const newUser = await userService.createUser({phone_number})
        await client.set('userOTP' , newUser.phone_number+otp)
        return { otp_code : this.generateOTP(4) , phone_number : newUser.phone_number }
    }
    
    async verifyPhoneNumber(phone_number:string, otp_code:string):Promise<string | null>{
        const userOTP = await client.get('userOTP');

        if(userOTP == phone_number+otp_code){
            await client.del('userOTP')
            return 'ok'
        }

        return null
    }
}