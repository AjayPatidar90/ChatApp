let express = require("express")
let mongoose = require("mongoose")
let userRouter = require("./src/Routes/userRoutes")
let messageRouter = require("./src/Routes/messagesRoutes")
let connection = require("./src/Connection/Connection")
let cors = require("cors")

let app = express()


app.use(express.json())
app.use(cors())



app.use("/",userRouter)
app.use("/message",messageRouter)


app.listen(3001,(err)=>{
   err?console.log(err):console.log("port is running")
})