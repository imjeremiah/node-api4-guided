require('dotenv').config();
const path = require('path');
const express = require('express');

const server = express();

const PORT = process.env.PORT || 8000;

server.use(express.static(path.join(__dirname, 'client/build')));

server.use(express.json());

server.get('/api/*', (req, res) => {
    res.json({
        cohort: 'Web 41'
    });
});

server.use('*', (_, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
});

server.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
});