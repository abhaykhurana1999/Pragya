const express=require('express')
const app=express()



app.use('/',express.static(__dirname + '/public'))

app.listen(5555,()=>{

    console.log('Server started at https://localhost:5555')
})