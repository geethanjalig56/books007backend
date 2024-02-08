const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const bookroute = require("./controllers/bookRouter")
const app = express()
app.use(express.json())
app.use(cors())

app.use("/api/book",bookroute)
mongoose.connect("mongodb+srv://geethanjali2001:ammu2001@cluster0.iwq8qez.mongodb.net/booksDb007?retryWrites=true&w=majority",{useNewUrlParser:true})

app.listen(3002, ()=>{
    console.log("yo server is running")
})