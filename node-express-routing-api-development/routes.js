module.exports = (app) => {
  app.get('/', (req, res) => {
   res.render('home1')
  }) 
  
  app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
  })
      app.get('/home',(req,res) => {
        res.send({msg: "hello njnj with blabla node js at home"})
    })
      app.get('/about',(req,res) => {
        res.send("hello welcome to node js this is about... ")
    
    })
}
 