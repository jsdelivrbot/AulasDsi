"use strict";
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static('.'));


app.get('/api/tabuada/:num', (req, res) => {

  var num = req.params.num;

  console.log("Servidor recebeu requisição, número: " + num);

  var result = {};

  for (var i = 1; i <= 10; i++) {
    result['num'+i] = {
      multiplicador: num,
      multiplicando: i,
      produto: num * i
    }
  }

  res.status(200).json(result)

});




app.listen(3000, function () {
  console.log('Servidor iniciado.')
});
