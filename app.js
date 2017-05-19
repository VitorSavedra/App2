const request = require('request');
const express = require('express');
const boddyParser = require('body-parser');
const port = '8000';
const app = express();
const route = require('./routes');
const server = app.listen(port,function(){   
const host = server.address().address;   
const port = server.address().port;   
console.log(`Executando em http://${host}:${port}`); });

app.use('/', route);
module.exports = app;