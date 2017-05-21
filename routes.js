const Router = require('express').Router();
const request = require('request');

Router.get('/app2', function(req, res) {
  request('http://private-bc4b79-automobidummy.apiary-mock.com/users', function (error, response, body) {
  res.send(body);
    });
});

module.exports = Router;