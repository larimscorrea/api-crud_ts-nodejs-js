import express from 'express';
import { router } from './routes';

const server = express();

server.use(router);

server.listen(5000, () => {
    console.log('Servidor on at port 5000 http://localhost:5000/');
});
