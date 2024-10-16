var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const dotenv = require('dotenv');

// Para fins de segurança, armazenamos os dados mais sensíveis, como chaves de segurança, e de APIs externamente, FORA da visão do cliente (front-end), por isso optei por deixar no arquivo principal do servidor, e inicializar quando for necessário dentro das respectivas rotas.
dotenv.config();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter); //  Rota principal
app.use('/users', usersRouter); // Não vamos usar

module.exports = app;
