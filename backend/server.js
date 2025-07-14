const express = require('express')

const app= express()
app.get('/', ()=>{
     console.log('hello');
     
})


app.listen(3000, ()=>{
     console.log("server is running");
     
})