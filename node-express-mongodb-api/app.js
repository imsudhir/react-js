const express = require('express');
const app = express();
const mongoose = require('mongoose');
require("dotenv").config()
const bodyParser = require('body-parser');
app.use(bodyParser.json())
// import routes
const postRoute = require('./routes/posts.js')
console.log(postRoute)
const port =3002; 

//middleware 
//   app.use('/get', postRoute);
  app.use('/posts', postRoute);
//Routes 
 
//db connetion 
mongoose.connect('mongodb+srv://sudhir:sudhir@123@cluster0-bqbjv.mongodb.net/test?retryWrites=true&w=majority', 
{ useNewUrlParser: true },
     () => {console.log('connected todb...')}
     );   

     
app.listen(port,()=>{
console.log("server is running at :" + port)
}); 

 