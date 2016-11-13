//File: routes/ruta.js
module.exports = function(app) {

  // Devolvemos todos las rutas
  app.get('/ruta', findAllGroup);
  // Devolvemos la ruta en particular
  app.get('/ruta/:id', findById);
  // Creamos una ruta
  app.post('/ruta', addGroup);
  
}
