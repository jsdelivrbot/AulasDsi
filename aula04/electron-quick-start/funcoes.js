function executa() {
  console.log("olá no console");
  let doc = document.createTextNode("texto qualquer");
  document.getElementById("resultado").appendChild(doc);
}

function conta() {
  for (var i = 1; i <= 10; i++) {
    console.log(i);
  }
}

function contaHtml() {
  var texto = "";
  for (var i = 1; i <= 10; i++) {
    if (i > 1) {
      texto+=",";
    }
    texto+=i;
  }
  console.log(texto);

  let doc = document.createTextNode(texto);
  document.getElementById("resultado2").appendChild(doc);
}

function mostraTabuada() {

}
