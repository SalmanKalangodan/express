const  express = require('express')
const app = express()
const token = async (req,res,next)=>{
    req.token = 123
    console.log("create token");
    next()
}

app.get('/',token, (req,res)=>{
    console.log(req.token);
    res.send('<h1>home</h1>')
})

app.get('/about',(req,res)=>{
    res.send('<h1>about</h1>')
})
app.get('/cart',(req,res)=>{
    res.send('<h1>cart</h1>')
})
app.get('/login',(req,res)=>{
    res.send('<h1>login</h1>')
})

app.listen(3005,()=>{
    console.log('server is running');
})