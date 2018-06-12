var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var funciones = require('./funciones.js');

app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Pass to next layer of middleware
  next();
});

app.post('/nuevousuario', function (req, res) {
	funciones.nuevoUsuario(usuario)
	.then(function(result){
		res.send(result);
	})
	.catch(function(err){
		console.log(err);
	});
});

app.listen(3773, function () {
	console.log('Escuchando en el puerto 3773!');
});