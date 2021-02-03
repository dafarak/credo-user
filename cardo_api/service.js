var mysql = require('mysql');
const express = require('express')
const app = express()
var config = require('./config.js');
var connection = mysql.createConnection(config.sqlConn);

exports.service = function(req,res) {


var price = []
connection.connect(function(err) {
  

  connection.query("SELECT id,img,type,text FROM service ", function (err, result, fields) {
    if (err) throw err;
   
    price = result;
 
    price = result;
  
    console.log(price[0]);
    res.send(
  
      price
    );
    
  });
 
  
});


}


// app.post('/categories',(req,res)=>{
//   res.send({
  
//     price
//   })
// })

// app.post('/carwash', cardataparser ,function(req,res){
 
//   var price=req.body.Price;
//     console.log(price);
//     // res.json({"response":true,"responseString":"Please specify " });
  
// })
// app.listen(3000,function(){
// console.log("server..")
// })
