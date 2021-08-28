// const express = require('express');
// const app = express();
// const router = express.Router();


// // app.use(checkUrl)
// const urlCheck = require('./middleware')
// app.get('/',function(req,res){
//   // res.send("Hello from aman ")
//   res.sendFile(__dirname+"/Home.html")

// })
// router.get('/login',urlCheck, function(req,res){
//   // res.send("Hello from home ")
//   res.sendFile(__dirname+"/Login.html")

// })
// router.get('/about',urlCheck, function(req,res){
//   // res.send("Hello from login ")
//   res.sendFile(__dirname+"/About.html")

// })
// app.use('/',router)
// app.listen(4500)

const express = require('express')
const app = express()
app.set('view engine','ejs')

app.get("/pro",function(req,res){
  // res.sendFile(__dirname+'/Home.html')
  res.render('Profile')
})

app.listen(4500)