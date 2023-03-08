import { IUser } from '../user/schema';
import userService from '../user/service';

export default new class Service{

    private generateOTP(length: number): string {
        const digits = '0123456789';
        let OTP = '';
        for (let i = 0; i < length; i++) {
          OTP += digits[Math.floor(Math.random() * 10)];
        }
        return OTP;
    }
    
    async phoneNumberLogin(phone_number:string):Promise<IUser | null>{
        const user = await userService.findByPhoneNumber(phone_number);

        if(user){
            const otp = this.generateOTP(4);
            console.log('user the authenticated')
            return await userService.updateUser(user , {otp_code:otp});
        }
        console.log('user the created')
        return await userService.createUser({
            phone_number , 
            otp_code : this.generateOTP(4)
        })
    }    
}