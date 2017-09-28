var express = require("express");
var bodyParser = require("body-parser");
var jwt = require('jsonwebtoken');

var passport = require("passport");
var passportJWT = require("passport-jwt");

var ExtractJwt = passportJWT.ExtractJwt;
var JwtStrategy = passportJWT.Strategy;

var usuarioId = 1;
var usuario = 'user';
var senha = 'senha';

var jwtOptions = {};

jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = 'meusistemaunivel';

var strategy = new JwtStrategy(jwtOptions, function(jwt_payload, next) {
  console.log('recebido payload', jwt_payload);
  next(null, usuario);
});

passport.use(strategy);

var app = express();

app.use(passport.initialize());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: true
}));

// parse application/json
app.use(bodyParser.json())

app.get("/", function(req, res) {
  res.json({
      message: "é nóis!"
    });
});

app.post("/login", function(req, res) {

  if( req.body.name != usuario ){
    res.status(401).json({
      message: "usuário não encontrado"
    });
  }

  if(senha === req.body.password) {

    var payload = {id: usuarioId};
    var token = jwt.sign(payload, jwtOptions.secretOrKey);
    res.json({message: "ok", token: token});
  } else {
    res.status(401).json({message:"senha inválida"});
  }
});

app.get("/secreto", passport.authenticate('jwt', { session: false }), function(req, res){
  res.json({message: "Sucesso. Você só consegue ver essa mensagem se passar um token."});
});

app.get("/secretoDebug",
  function(req, res, next){
    console.log(req.get('Authorization'));
    next();
  }, function(req, res){
    res.json("debugging");
});

app.listen(3000, function() {
  console.log("Express rodando.");
});
