import { Router } from 'express';
import passport from 'passport';
import { index } from './controller';
const router = Router();


router.use(passport.authenticate('jwt' , {session : false}));
router.get('/' , index)

export default router ; 