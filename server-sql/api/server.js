const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());

const postRoutes = require('./routes/posts')
server.use('/post', postRoutes)

// Root route
server.get('/', (req, res) => res.send('Welcome to telegraph '))

module.exports = server
