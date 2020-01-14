const express = require('express');
const serveIndex = require('serve-index');
// const express = require('ejs');

const app = express();
const port = 3002
// serve static files 
app.use('/home', express.static('public'));
app.use('/about', serveIndex('public'));

// import routes
require('./routes')(app)
app.set('view engine', 'ejs')
app.listen(port, ()=>{
    console.log("server running on " + port)
})

 






