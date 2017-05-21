const Router = require('express').Router();
const request = require('request');

Router.get('/app2', function(req, res) {
  // Realiza requisição em API externa.
  request('http://private-bc4b79-automobidummy.apiary-mock.com/users', function (error, response, body) {
  // Converte resultado de requisição em JSON.
  body = JSON.parse(body);
  // Exibe resultado.
  res.json(body);
    });
});

module.exports = Router;