import { 
    ExtractJwt, 
    Strategy, 
    StrategyOptions 
} from 'passport-jwt';
import configs from '../../configs';
import userService from '../user/service' ;
import { Payload } from './interface';

// jwt options ;
const jwtOptions:StrategyOptions = {
    jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken() , 
    secretOrKey : configs.JWT_SECRET_KEY , 
}

export const jwtStartegy = new Strategy(jwtOptions , async (payload:Payload, done)=>{
    const user = await userService.findById(payload.userId);

    if(!user){
        return done(null , false)
    }

    done(null , user);
});