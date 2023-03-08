import { Router } from 'express' ; 
import { validate } from '../../utils/validation-body';
import { phoneLogin, verifyPhoneNumber } from './controller';
import { phoneNumberVerify_validate, phoneNumber_validate } from './validator';
const router = Router();

router.post(
    '/phoneLogin' ,
    phoneNumber_validate(),
    validate , 
    phoneLogin
);

router.post(
    '/verifyPhoneNumber' , 
    phoneNumberVerify_validate() , 
    validate , 
    verifyPhoneNumber
)

export default router ;