#Angular UI <->  WebSocket Server <-> Anything
Quick sandbox project to establish communication trough a WebSocket server between an angular-based UI and anything else ws-compliant.

##What's inside the package?

At the root is an angular project. The folder 'wss' contains the Typescript sourcecode for a WebSocket server that uses Express and the 'ws' package to take care of WebSocket-related matters. The Angular source code gets built inside 'wss/public', the contents of which are served by the WebSocket server.
The angular project uses the rxjs 'WebSocketSubject' to handle messages from/to the WebSocket server.

##How to build and serve

Build and serve:
```
npm run build-and-serve
```
This buids the angular project to path 'wss/public', then transpiles and runs the WebSocket server.

Serve (when already built once):
```
npm run serve
```

##How to access the UI and WebSocket server:

**UI**: http://localhost:21040
**WebSocket server**: ws://localhost:21040
