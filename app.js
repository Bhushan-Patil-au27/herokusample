const express = require("express")
const postdata = require('./mocks/book.json')
const app = express()


app.get('/',(req,res) =>{
    res.send("Hello")

})

app.get('/posts',(req,res) =>{

    res.json(postdata.posts)
})

app.listen(8080)