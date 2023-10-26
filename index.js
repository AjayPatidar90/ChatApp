let express = require("express")
let mongoose = require("mongoose")
let userRouter = require("./src/Routes/userRoutes")
let messageRouter = require("./src/Routes/messagesRoutes")

let app = express()


app.use(express.json())


mongoose.connect("mongodb+srv://abjushsaxena90:ankush123@cluster0.37q9k6c.mongodb.net/groupChatForUser?retryWrites=true&w=majority&appName=AtlasApp").then((res)=>{
    console.log("database connected")
}).catch((err)=>{
    console.log(err)
})

let UserModel = require("./src/models/userModel")
let addUser = require("./src/controler/userControler")

// app.get("/addUser",getUser)

app.use("/",userRouter)
app.use("/message",messageRouter)


app.listen(3000,(err)=>{
   err?console.log(err):console.log("port is running")
})