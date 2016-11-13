//File: routes/ruta.js
module.exports = function(app) {

	var config = require('../config');
	var mysql      = require('mysql');

	var pool  = mysql.createPool({
	host     : config.RDS_HOSTNAME,
	user     : config.RDS_USERNAME,
	password : config.RDS_PASSWORD,
	port     : config.RDS_PORT,
	database : 'busing'
	});

	findAll = function(req, res) {
		pool.query('SELECT * FROM ruta', function(err, rows, fields) {
		  if (err) throw err;
		  var users = JSON.stringify(rows);
		  res.status(200).send(users);
		});
	};

	findById = function(req,res) {
		var user_id = req.params.id;
		pool.query('SELECT * FROM ruta WHERE id = '+user_id, function(err, row, fields) {
		  if (err) throw err;
		  var user = JSON.stringify(row[0]);
		  res.status(200).send(user);
		});
	}

	add = function(req,res) {
		pool.query("INSERT INTO ruta SET desde = '"+req.body.desde+"', hasta = '"+req.body.hasta+"',time_start = '"+req.body.time_start+"',time_end = '"+req.body.time_end+"',type = '"+req.body.type+"',id_user = '"+req.body.id_user+"',activa = '"+req.body.activa+"'"
		, function(err, row, fields) {
		  if (err) throw err;
		  var row = JSON.stringify(row);
		  res.status(200).send(row.insertId);
		});
	}

	// Devolvemos todos las rutas
	app.get('/ruta', findAll);
	// Devolvemos la ruta en particular
	app.get('/ruta/:id', findById);
	// Creamos una ruta
	app.post('/ruta', add);
  
}
