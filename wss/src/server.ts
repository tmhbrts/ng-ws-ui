import * as express from 'express';
import * as WebSocket from 'ws';
 
const app = express();

const server = app.listen(21040, ()=> {
    console.log('listening on port 21040...');
});

const wss = new WebSocket.Server({ server });

app.use(express.static('public'));

wss.on('connection', (ws: WebSocket) => {
    console.log('new connection');

    ws.on('message', (message: string) => {
        console.log('received message' + message);
    });
});