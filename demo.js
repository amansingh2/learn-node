// var http = require('http');
// http.createServer(function(req,res){
//   res.write("Hello from node js server")
//   res.end()

// }).listen(5000)

// var others = require('./others')
// console.warn(others(10,20))

// var http = require('http')
// var data = [
//   {name:"aman",age:"21",email:"aman.nitmizoram@gmail.com"},
//   {name:"aman",age:"21",email:"aman.nitmizoram@gmail.com"},
//   {name:"aman",age:"21",email:"aman.nitmizoram@gmail.com"},
//   {name:"aman",age:"21",email:"aman.nitmizoram@gmail.com"}
// ]
// http.createServer(function(req,res){
//   //jab bhi koi page dikhta hai to uska request hota hai 200
//   res.writeHead(200,{'Content-Type':'Applocation\json'})
//   res.write(JSON.stringify(data))//ye haesha string hi leta hai!!
//   res.end()
// }).listen(3900)

// var http = require("http");
// // var uc = require('upper-case')
// var page = `
// <h1>Hello node js</h1>
// <input type = 'text'/><br><br>
// <input type = 'text'/><br><br>
// <input type = 'text'/>`;
// http
//   .createServer(function (req, res) {
//     // res.writeHead(200, { "Content-Type": "text/html" });
//     // res.write(page);
//     // res.write(uc.upperCase("node web page"))
//     res.end();
//   })
//   .listen(4000);

//kuch errors hai isme??
// var nodemailer = require('nodemailer');
// var transport = nodeMailer.createServer({
//   host: 'smtp.gmail.com'
//   port: 587,
//   secure: false,
//   requireTLS: true,
//   auth:{
//     user:'aman.nitmizoram@gmail.com',
//     pass:'Aman@1207'
//   }
// })

// var mailOptions = {
//   from:'aman.nitmizoram@gmail.com',
//   to:'aman.nitmizoram@gmail.com',
//   subject:'test node mails',
//   text:'Hello bhaiyo!!'
// }
// transport.sendMail(mailOptions,function(erroe,info){
//   if(error){
//     console.warn(error)
//   }else{
//     console.warn("email has been sent")
//   }
// })


//node mon

// var http = require("http");
// http
//   .createServer(function (req, res) {
//     // res.writeHead(200, { "Content-Type": "text/html" });
//        res.write("hello aman singh");
//        res.end();
//   })
//   .listen(4000);


// how to read a file and show in browser!
var http = require("http");
var fs = require('fs')
http
  .createServer(function (req, res) {
   fs.readFile('demo.html' , function(err,data){
     res.writeHead(200,{ "Content-Type": "text/html" })
    res.write(data)
    return res.end() 
    })
  })
  .listen(4000)


