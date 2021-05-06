console.log('it is working');
const express = require('express');

const server = express();

const PORT = process.env.PORT || 8000;

server.use(express.json());

server.get('/api/*', (req, res) => {
    res.json({
        cohort: 'Web 41'
    });
});

server.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
});