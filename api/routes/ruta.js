//File: routes/ruta.js
module.exports = function(app) {

	findAll = function(req, res) {
	  res.status(200).send('ola ke ase');
	};

	findById = function(req,res) {
	  res.status(200).send('ola ke ase '+req.params.id);
	}

	add = function(req,res) {
	  res.status(200).send('ola ke ase');
	}

  // Devolvemos todos las rutas
  app.get('/ruta', findAll);
  // Devolvemos la ruta en particular
  app.get('/ruta/:id', findById);
  // Creamos una ruta
  app.post('/ruta', add);
  
}
