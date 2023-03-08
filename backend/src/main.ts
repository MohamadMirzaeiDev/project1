import express , { Application } from 'express';
import passport from 'passport';
import mainRoute from './modules/index' ;
import { connect } from './configs/database';
import { client } from './configs/redis-config';

const port = process.env.HTTP_PORT || 3002 ;
const app:Application = express()


app.use(express.static('public'));
app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(passport.initialize());
app.use(mainRoute);


app.listen(port , ()=>{
    console.clear()
    console.log(process.version)
    console.log(`app runing on port ${port}`);
    connect((err , info)=>{
        if(err){
            return console.log(err.message)
        }
        console.log(info)
    })
    client.on('error' , (err)=>{
        console.log(err) ;
    })
})