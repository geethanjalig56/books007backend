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

module.exports = router