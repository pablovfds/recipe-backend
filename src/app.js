
if (process.env.NODE_ENV !== 'prod') {
    require('dotenv/config');
}

const express = require('express');
const http = require('http');
const recipesRoute = require('./routes/recipes');

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', recipesRoute)

// HTTP port setting
const port = process.env.PORT || '3000';

// HTTP server creation
const server = http.createServer(app);
// listening all incoming requests on the set port
server.listen(port, () => console.log(`backend running on port:${port}`));