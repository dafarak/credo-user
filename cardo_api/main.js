const express = require('express')
const app = express()
var ex1 = require('./login.js');
var ex2 = require('./insert.js');
var ex3 = require('./registerapi.js');
var ex4 = require('./product.js');
var ex5 = require('./service.js');
var ex6 = require('./category.js');
// var ex7 = require('./upimag.js');
const bodyParser = require('body-parser')
// const mysql = require('mysql');
app.use(function(req,res,next){
  res.header ("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Headers" , 'Origin, Content-Type, X-Auth-Token, content-type');
  next();
});

// app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

// app.post('/categories',ex1.categories);

app.post('/categories',ex1.login);
app.post('/carwashinshert',ex2.insert);
// app.post('/file',ex2.image);
app.post('/productinsert',ex2.productinsert);
app.post('/registerapi',ex3.register);
app.post('/product',ex4.product);
app.post('/service',ex5.service);
app.post('/category',ex6.category);
// app.post('/file',ex7.insf);
app.listen(3000) 