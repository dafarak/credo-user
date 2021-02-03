var mysql = require('mysql');
const express = require('express')
const app = express()
const multer =require('multer');

const bodyParser =require('body-parser')
app.use(function(req,res,next){
    res.header ("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Headers" , 'Origin, Content-Type, X-Auth-Token, content-type');
    next();
});


var cardataparser = bodyParser.urlencoded({extended:false})
app.use(bodyParser.json())
var config = require('./config.js');
var connection = mysql.createConnection(config.sqlConn);



exports.insert = function(req,res) {
var fname;
var email;
var password;

connection.query("SELECT id FROM registerdata ", function (err, result, fields) {
  if (err) throw err;
 var id
  id = result.length + 1;
  console.log(id);

 
  fname=req.body.classfname;
  email=req.body.classemail;
  pass=req.body.classpassword;

   
 
      
      // Insert a record in the "customers" table:
      console.log(fname);
      console.log(id);
      console.log(email);
      console.log(password);
      var sql = "INSERT INTO registerdata (id,email,pass  ) VALUES (?,?,?)";
      connection.query(sql, [id,email,pass], function (err, result) {
        if (err) throw err;
        console.log("record inserted",result);
      });
});
}
exports.productinsert = function(req,res) {
  var fname;
  var email;
  var password;
  
  connection.query("SELECT id FROM product", function (err, result, fields) {
    if (err) throw err;
   var id
    id = result.length + 1;
    console.log(id);
  
   
    img=req.body.classfname;
    // email=req.body.classemail;
    // pass=req.body.classpassword;
  
     
   
        
        // Insert a record in the "customers" table:
        console.log(img);
        console.log(id);
        console.log(email);
        console.log(password);
        var sql = "INSERT INTO product (img ) VALUES (?)";
        connection.query(sql, [img], function (err, result) {
          if (err) throw err;
          console.log("record inserted",result);
        });
  });
  }

  
  