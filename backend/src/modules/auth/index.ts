import { Router } from 'express' ; 
import { validate } from '../../utils/validation-body';
import { phoneLogin } from './controller';
import { phoneNumber_validate } from './validator';
const router = Router();

router.post(
    '/phoneLogin' ,
    phoneNumber_validate(),
    validate , 
    phoneLogin
);

export default router ;