var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var dburl = "mongodb://localhost:27017/";
var dbo;
var lusers;
var sesiones;

MongoClient.connect(dburl, { useNewUrlParser: true }).then(function(db) {
  dbo = db.db("loginapp");
  lusers = dbo.collection("lusers");
  sesiones = dbo.collection("sesiones");
});

module.exports = {
	checkDB
}