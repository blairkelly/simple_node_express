var http = require('http');
var express = require('express');
var app = express();           // start Express framework
var server = require('http').createServer(app); // start an HTTP server

server.listen(3000);

console.log("Listening");

app.get('/', function (req, res) {
    res.send("Hi there!")
});