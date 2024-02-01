let mongoose = require("mongoose")



let connection = mongoose.connect("mongodb+srv://ajaypatidar90989:ajay123@cluster0.lr0eb8u.mongodb.net/chatdata?retryWrites=true&w=majority").then((res)=>{
    console.log("database connected")
}).catch((err)=>{
    console.log(err)
})


module.exports = connection
