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
  deleteExpiredSessions();
})
.catch(function(err){
  console.log(err)
});

function nuevoUsuario(usuario){
  return comprobarUsuario(usuario.nombre, usuario.email)
  .then(function(){
    return lusers.insertOne(usuario);
  })
}

function comprobarUsuario(nombre, email){
  return lusers.findOne({'nombre': nombre})
	.then(function(res) {
		if(res){
      return Promise.reject('Nombre en uso');
    }
    return lusers.findOne({'email': email})
  })
  .then(function(res) {
		if(res){
      return Promise.reject('Email en uso');
    }
  })
}

function login(datosLogin){
  return lusers.findOne({'nombre': datosLogin[0], 'pass': datosLogin[1]})
  .then(function(res){
    if(res){
      return crearSesion(res._id);
    }else{
      return Promise.reject('Usuario o contraseña no válidos');
    }
  })
}

function crearSesion(idUser){
  let d = new Date();
  let nextWeek = new Date(d.getTime()+604800000);
  return sesiones.insertOne({'idUser': idUser, 'expira': nextWeek})
  .then(function(res){
    let cookie = `sessID=${res.insertedId}; expires=${nextWeek}`;
    return(cookie);
  })
}

function getUserNameBySessId(sessID){
  let searchID = new mongo.ObjectID(sessID);
  return sesiones.findOne({_id: searchID})
  .then(function(res){
    return lusers.findOne({_id: res.idUser});
  })
  .then(function(res){
    return res.nombre;
  })
}

function cerrarSesion(sessID){
  let searchID = new mongo.ObjectID(sessID);
  return sesiones.removeOne({'_id': searchID})
}

function deleteExpiredSessions(){
  let d = new Date();
  sesiones.remove({'expira': {$lt: d}})
}

module.exports = {
  nuevoUsuario,
  login,
  getUserNameBySessId,
  cerrarSesion
}