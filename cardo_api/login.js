var mysql = require('mysql');
const express = require('express')
const app = express()
var config = require('./config.js');
var connection = mysql.createConnection(config.sqlConn);
// const bodyParser =require('body-parser')





// var cardataparser = bodyParser.urlencoded({extended:false})
// app.use(bodyParser.json())
exports.login = function(req,res) {


var price = []
connection.connect(function(err) {
  
  //Select all customers and return the result object:
  connection.query("SELECT email,password FROM data ", function (err, result, fields) {
    if (err) throw err;
    // for (i = 0; i < result.length; i++){
    //   // result[i].Img= result[i].Img.slice(12);
    //   var str1 = "http://10.160.7.27:8887/";
    //   result[i].Img = str1.concat(result[i].Img.slice(12));
    //   // console.log( str2 );
    // };
    price = result;
    // result[33].Img.slice(12);
   
     
    // console.log(result);
    price = result;
    //  var str1 = "E:/agx-admin-master/src/cars/";
    //  var str2 = result[33].Img.slice(12);
    //  var str3 = str1.concat(str2);
    //  console.log(str3);
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
