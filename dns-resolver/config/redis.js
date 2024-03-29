import { Config } from './config.js';
import { createClient } from 'redis';

const redisClient = createClient({
  socket:{
    host: Config.REDIS_HOST,
    port: Config.REDIS_PORT,
  }
  });

export { redisClient }