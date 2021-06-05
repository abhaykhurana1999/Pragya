const express=require('express')
const app=express()
const{db}=require('./db/models')


app.use('/',express.static(__dirname + '/public'))


db.sync().then(()=>{

    app.listen(5555,()=>{

        console.log('Server started at https://localhost:5555')
    })
}).catch((err)=>{

    console.error(new Error('Could not Start Database'))
    console.error(err)
})
