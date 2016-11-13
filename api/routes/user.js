//File: routes/user.js
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
    pool.query('SELECT * FROM user', function(err, rows, fields) {
      if (err) throw err;
      var users = JSON.stringify(rows);
      res.status(200).send(users);
    });
  };

  findById = function(req,res) {
    var user_id = req.params.id;
    pool.query('SELECT * FROM user WHERE id = '+user_id, function(err, row, fields) {
      if (err) throw err;
      var user = JSON.stringify(row[0]);
      res.status(200).send(user);
    });
  }

  add = function(req,res) {
    pool.query("INSERT INTO user SET login = '"+req.body.login+"', password = '"+req.body.password+"',email = '"+req.body.email+"'"
    , function(err, row, fields) {
      if (err) throw err;
      var row = JSON.stringify(row);
      res.status(200).send(row.insertId);
    });
  }

  // Devolvemos todos los usuarios
  app.get('/user', findAll);
  // Devolvemos el usuario en particular
  app.get('/user/:id', findById);
  // Creamos un usuario
  app.post('/user', add);

}
