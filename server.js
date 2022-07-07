const express = require('express');
const http = require('http');
const path = require('path');

const app = express();

const port = process.env.PORT || 4200;

app.use(express.static(__dirname + '/dist/'));

<<<<<<< HEAD
app.get('/*', (_req, res) => res.sendFile(path.join(__dirname)));
=======
app.get('/*', (req, res) => res.sendFile(path.join(__dirname)));
>>>>>>> caaba624bd1b0bbd5d2dc98f3b25ceca860b944a

const server = http.createServer(app);

server.listen(port, () => console.log(`App running on: http://localhost:${port}`));