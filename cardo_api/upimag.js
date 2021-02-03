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
   
const storage = multer.diskStorage({
destination:(req,file,callback)=>{
callback(null,'uploads')

},
filename:(req,file,callback) =>{
  callback(null,`img${file.originalname}`)

}

})
var upload = multer({storage:storage})

console.log("hi");


app.post('/file',upload.single('file'),(req,res) =>{
    const file = req.file;
    console.log(file.filename);
    if(!file){
        const error = new Error('FILE UPLODE PLEASE')
        error.httpStatusCode = 400
        return next(error)
      }
      res.send(file)
})

app.listen(3000,function(){
  console.log("server..")
  })



