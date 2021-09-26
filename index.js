const express = require('express')
const app = express()

const server = require('http').createServer(app)
const io = require('socket.io')(server,{cors:{origin: "*" }})

const mongoose = require("mongoose")

const DB = "mongodb+srv://hutum:_~z4FiRp_nTg6-4@cluster0.v8sh5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(DB, function(err, db){console.log('database connected'); 
let info = db.collection('register');                                     
 
app.get('/', (req,res)=>res.redirect('https://www.youtube.com/watch?v=lY6icfhap2o'))

server.listen(process.env.PORT || 3001, ()=> {
  console.log("server running...")
})

io.on('connection', (socket)=>{
  console.log("User connected:" + socket.id)
 
  socket.on('register', (data)=>{
    let email = data.email;
    let gender = data.gender;
    let first_name = data.first_name;
    let last_name = data.last_name;
    let password = data.password;
    
    if(email && gender && first_name && last_name && password){
    info.insert({
     address:email, first_name: first_name, last_name: last_name, password:password, gender:gender});
    }

  })

})
   });                    