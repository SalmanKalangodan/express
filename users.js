const express  = require('express')
const bodyparser = require('body-parser')

const app = express()

    app.use(bodyparser.urlencoded({extended : true}))
    app.use(bodyparser.json())

let users = []

app.post('/user', (req,res)=>{
  users.push({ id:req.body.id ,name:req.body.name , email:req.body.email , password :req.body.password})
  console.log(users)
  res.send('ok')
})

app.get('/user' , (req,res)=>{
    res.send(users)
})

app.put('/user',(req,res)=>{
    req
})

app.get('/user/:id', (req,res)=>{
    console.log(req.params.id)
    const userid =parseInt(req.params.id)
    const data = users.filter((value)=> value.id==userid)
    console.log(data);
    res.send(data)
})


app.listen(3030)