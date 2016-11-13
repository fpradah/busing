//File: routes/user.js
module.exports = function(app) {

  // Devolvemos todos los usuarios
  app.get('/user', findAllGroup);
  // Devolvemos el usuario en particular
  app.get('/user/:id', findById);
  // Creamos un usuario
  app.post('/user', addGroup);
  
}
