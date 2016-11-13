var express  = require("express");
var app      = express();
var mysql      = require('mysql');
var bodyParser = require('body-parser');
var cors = require('cors');
var config = require('./config');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cors());

// Rutas de nuestras conexiones
user = require('./routes/user')(app);
ruta = require('./routes/ruta')(app);

var connection = mysql.createConnection({
  host     : config.RDS_HOSTNAME,
  user     : config.RDS_USERNAME,
  password : config.RDS_PASSWORD,
  port     : config.RDS_PORT
});

app.listen(3000, function() {
  console.log("Database Callma Server running on http://localhost:3000");
  connection.connect(function(err) {
    if (err) {
      console.error('ERROR: connecting to Database : ' + err.stack);
      return;
    }
    console.log('Connected to Database as id ' + connection.threadId);
  });
});
