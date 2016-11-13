//File: routes/user.js
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

  // Devolvemos todos los usuarios
  app.get('/user', findAll);
  // Devolvemos el usuario en particular
  app.get('/user/:id', findById);
  // Creamos un usuario
  app.post('/user', add);

}
