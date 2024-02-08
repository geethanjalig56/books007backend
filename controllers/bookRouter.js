const express = require("express")
const router = express.Router()
const bookmodel007 = require("../model/bookModel")

router.post("/add", async(req,res)=>{
    let data = req.body
    let bookobj = new bookmodel007(data)
    let result = await bookobj.save()
    res.json({status:"success"})
})

router.get("/view", async(req,res)=>{
    let data = await bookmodel007.find()
    res.json(data)
})

router.post("/src",async(req,res)=>{
    let input = req.body
    let data = await bookmodel007.find(input)
    res.json(data)
})

module.exports = router