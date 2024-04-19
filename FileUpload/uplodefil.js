const express = require('express')
const multer = require('multer')


const app = express()
const fileStorageEngine = multer.diskStorage({
    destination : (req , file , callback)=>{
        callback(null,'./images')
    },
    filename:(req,file,callback)=>{
       callback(null ,Date.now() + "--" + file.originalname)
    }
})

const upload = multer({storage : fileStorageEngine}) ; 

app.post('/upload' ,upload.single("image"), (req, res)=>{
    console.log(req.file)
    res.send("upload file success fully")
} )

app.post('/mutiple' ,upload.array('images' , 3), (req,res)=>{
    console.log(req.files);
    res.send('multiple files upload success filly')
} )



app.listen(3006 , ()=>{
    console.log("server is running");
})