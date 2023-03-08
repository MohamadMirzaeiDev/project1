import redis from 'redis';
import configs from '.';


export const client = redis.createClient({
    url : configs.REDIS_URI
});