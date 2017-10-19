module.exports = function(app, pool) {

  app.post('/alunos', (req, res) => {

    pool.connect((err, client, release) => {

      const nome = req.body.nome;

      if (err) {
        res.status(500);
        return console.error('Erro na conexão.', err.stack);
      }

      client.query("INSERT INTO aluno(nome) VALUES ($1)", [nome], (err, item) => {

        release();

        if (err) {
          res.status(500).json(err);
          return console.error('Erro executanto a consulta', err.stack);

        } else {
          res.status(200).json("adicionado");
          return console.log('Inserido registro');

        }

      });
    });
  });


  app.get('/alunos', (req, res) => {

    const id = req.params.id;

    pool.connect((err, client, release) => {

      const nome = req.body.nome;

      if (err) {
        res.status(500);
        return console.error('Erro na conexão.', err.stack);
      }

      client.query("SELECT * FROM aluno", [], (err, item) => {

        release();

        if (err) {
          res.status(500).json(err);
          return console.error('Erro executanto a consulta', err.stack);

        } else {
          res.status(200).json(item.rows);
          return console.log(item.rowCount + ' registros retornados.');

        }

      });

    });

  });


  app.get('/alunos/:id', (req, res) => {

    const id = req.params.id;

    pool.connect((err, client, release) => {

      const nome = req.body.nome;

      if (err) {
        res.status(500);
        return console.error('Erro na conexão.', err.stack);
      }

      client.query("SELECT * FROM aluno WHERE id = $1", [id], (err, item) => {

        release();

        if (err) {
          res.status(500).json(err);
          return console.error('Erro executanto a consulta', err.stack);

        } else {
          res.status(200).json(item.rows);
          return console.log(item.rowCount + ' registros retornados.');

        }

      });

    });

  });

  app.delete('/alunos/:id', (req, res) => {

  });

  app.put('/alunos/:id', (req, res) => {

  });

};
