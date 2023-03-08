import { 
    ExtractJwt, 
    Strategy, 
    StrategyOptions 
} from 'passport-jwt';
import configs from '../../configs';
import userService from '../user/service' ;

// 
const jwtOptions:StrategyOptions = {
    jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken() , 
    secretOrKey : configs.JWT_SECRET_KEY , 
}

const jwtStartegy = new Strategy(jwtOptions , async (payload , done)=>{
    const user = await userService.findById(payload.id);

    if(!user){
        return done(null , false)
    }

    done(null , user);
})