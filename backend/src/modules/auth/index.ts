import { Router } from 'express' ; 
import { phoneLogin } from './controller';
const router = Router();

router.get('/phone' , phoneLogin);

export default router ;