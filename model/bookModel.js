const mongoose = require("mongoose")
const bookSchema = mongoose.Schema(
    {
        title:String,
        author:String,
        genre:String,
        published_year:String,
        publisher:String
    }
)

module.exports = mongoose.model("book",bookSchema)