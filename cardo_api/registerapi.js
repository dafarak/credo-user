var mysql = require('mysql');
const express = require('express')
const app = express()


const bodyParser = require('body-parser')
app.use(function(req, res, next) {
 res.header("Access-Control-Allow-Origin", '*');
 res.header("Access-Control-Allow-Headers", 'Origin, Content-Type, X-Auth-Token, content-type');
 next();
});


var cardataparser = bodyParser.urlencoded({
 extended: false
})
app.use(bodyParser.json())
var config = require('./config.js');
var connection = mysql.createConnection(config.sqlConn);

exports.register = function(req, res) {
 var fname;
 var email;
 var password;

 connection.query("SELECT id FROM registerdata ", function(err, result, fields) {
  if (err) throw err;
  var id
  id = result.length + 1;
  console.log(id);



  fname = req.body.fname;
  lname = req.body.lname;
  email = req.body.email;
  pass = req.body.pass;





  console.log(fname);
  console.log(id);
  console.log(email);
  console.log(pass);
  var sql = "INSERT INTO registerdata (id,fname,lname,email,pass ) VALUES (?,?,?,?,?)";
  connection.query(sql, [id, fname, lname, email, pass], function(err, result) {
   if (err) throw err;
   console.log("record inserted", result);
  });






 });

}



// app.listen(3000,function(){
// console.log("server..")
// })