var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var dburl = "mongodb://localhost:27017/";
var dbo;
var lusers;
var sesiones;

MongoClient.connect(dburl)
.then(function(db) {
  dbo = db.db("loginapp");
  lusers = dbo.collection("lusers");
  sesiones = dbo.collection("sesiones");
})
.catch(function(err){
  console.log(err)
});

function nuevoUsuario(usuario){
  crearUsuario(usuario)
  // comprobarUsuarioUnico(usuario.nombre, usuario.email)
  // .then(function(res){
  //   console.log(res);
  //   crearUsuario(usuario);
  // })
  // .catch(function(err){
  //   res.send(err);
  // })
}

function comprobarUsuarioUnico(nombre, email){
  return true;
}

function crearUsuario(usuario){
  lusers.insertOne(usuario);
}

module.exports = {
	nuevoUsuario
}