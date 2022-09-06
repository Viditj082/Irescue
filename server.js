
const express=require('express')
const app=express()
const path = require('path')
app.use(express.static('public'))

app.get('/',(req,res)=>{
res.sendFile(__dirname+'/index.html')
})

app.get('/team',(req,res)=>{
    res.sendFile(__dirname+'/public/team.html');
})

app.listen( process.env.PORT||9000 ,()=>{
    console.log('Server has stated !!')
})
