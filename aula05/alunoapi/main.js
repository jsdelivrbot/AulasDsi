"use strict";
const express = require('express');
const bodyParser = require('body-parser');
const pg = require('pg');

function getClient() {
  return new pg.Client({
    host: 'localhost',
    port: 5432,
    database: 'cadaluno',
    user: 'postgres',
    password: 'univel',
  });
}

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', (req, res) => {
  res.status(200).send('Aplicação executando')
});

app.post('/add', (req, res) => {

  const nome = req.body.nome
  const client = getClient();
  client.connect()
  client.query("INSERT INTO aluno(nome) VALUES ($1)", [nome], (err, item) => {
    if(err){
      res.json(err)
      return next(err)
    } else {
      res.status(200).json("adicionado")
    }
    client.end();
  })
})

app.listen(3000, function () {
  console.log('Servidor iniciado.')
})
