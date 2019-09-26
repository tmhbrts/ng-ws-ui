import * as express from 'express';
import * as WebSocket from 'ws';
import { UIEvent } from './lib/ui-event';
 
const app = express();

const server = app.listen(21040, ()=> {
    console.log('listening on port 21040...');
});

const wss = new WebSocket.Server({ server });

app.use(express.static('public'));

wss.on('connection', (ws: WebSocket) => {
    console.log('new connection');

    ws.on('message', (e: UIEvent) => {
        console.log('received UI event' + e);
        wss.clients.forEach( (client) => {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(e);
            }
        });
    });

    ws.on('close', function close() {
        console.log('client disconnected');
    });
});