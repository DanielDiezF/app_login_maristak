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
  return comprobarUsuario(usuario.nombre)
  .then(function(){
    return crearUsuario(usuario);
  })
}

function comprobarUsuario(nombre){
  return lusers.findOne({'nombre': nombre})
	.then(function(res) {
		if(res){
      return Promise.reject('Nombre en uso');
    }
  })
}

function crearUsuario(usuario){
  lusers.insertOne(usuario)
}

module.exports = {
	nuevoUsuario
}