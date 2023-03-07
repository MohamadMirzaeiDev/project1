import { 
    ExtractJwt, 
    Strategy, 
    StrategyOptions 
} from 'passport-jwt';
import configs from '../../configs';

const jwtOptions:StrategyOptions = {
    jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken() , 
    secretOrKey : configs.JWT_SECRET_KEY , 
}


const jwtStartegy = new Strategy(jwtOptions , (payload , done)=>{
    
})