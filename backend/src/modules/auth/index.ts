import { Router } from 'express' ; 
import { phoneLogin } from './controller';
const router = Router();

router.post('/phone' , phoneLogin);

export default router ;