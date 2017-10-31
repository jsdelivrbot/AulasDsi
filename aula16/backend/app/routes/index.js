const alunoRoutes = require('./aluno_routes');

module.exports = function(app, pool) {
  alunoRoutes(app, pool);
};
