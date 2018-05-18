const express = require('express');
const bodyParse = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

//Conecta no banco
mongoose.connect('mongodb://marcone:marcone@ds014648.mlab.com:14648/vouchers').then(
    () => console.log("Banco Conectado"),
    (err) => console.log(err)
);

//Carrega as Rotas
const indexRoute = require('./routes/indexRoute');
const voucherRoute = require('./routes/voucherRoute');


app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended: false}));

app.use('/', indexRoute);
app.use('/vouchers', voucherRoute);

module.exports = app;



