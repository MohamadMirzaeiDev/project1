import express , { Application } from 'express';
import passport from 'passport';
import mainRoute from './modules/index' ;
import { connectMongoDB, connectRedis } from './configs/database';
import { jwtStartegy } from './modules/auth/jwt-startegy';

const port = process.env.HTTP_PORT || 3002 ;
const app:Application = express()


app.use(express.static('public'));
app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(passport.initialize());
passport.use(jwtStartegy);
app.use(mainRoute);


app.listen(port , ()=>{
    console.clear()
    console.log(process.version)
    console.log(`app runing on port ${port}`);
    connectMongoDB((err , info)=>{
        if(err){
            return console.log(err.message)
        }
        console.log(info)
    })
    connectRedis((err , info)=>{
        if(err){
            return console.log(err.message)
        }
        console.log(info)
    })
})