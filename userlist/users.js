const express  = require('express')
const bodyparser = require('body-parser')

const app = express()

    app.use(bodyparser.urlencoded({extended : true}))
    app.use(bodyparser.json())                          

let users = []

app.post('/user', (req,res)=>{
  users.push({ id:req.body.id ,name:req.body.name , email:req.body.email , password :req.body.password})
  console.log(users)
  res.send(users)
})

app.get('/user' , (req,res)=>{
    res.send(users)
})

app.get('/user/:id', (req,res)=>{
    console.log(req.params.id)
    const userid =parseInt(req.params.id)
    const data = users.filter((value)=> value.id==userid)
    console.log(data);
    res.send(data)
})

app.put('/user/:id', (req, res)=>{
    const userId = req.params.id
    console.log(userId);
    const newdata = {id:userId,name:req.body.name , email:req.body.email , password :req.body.password}
      let index = 0
     users.map((value , i)=>{
       if( value.id==userId){
          index+= i
       }
    } )
     users[index] = newdata
    res.send(users)
})

app.delete('/user/:id',(req,res)=>{
    const userId = req.params.id
    const newdata = users.filter((value)=> value.id !=userId)
    console.log(newdata);
    users = newdata
    
     res.send(users)
})


app.listen(3030)