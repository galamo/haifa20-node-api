console.log("Server Start")
const express = require("express")

const api = express()


api.get("/message", (req, res, next) => {
    res.send("this is the first api created")
})

api.get("/current-time", (req, res, next) => {
    const time = new Date().toUTCString()
    console.log(time)
    console.log(time)
    console.log(time)
    console.log(time)
    console.log(time)
    res.json({ currentTime: time, message: "This is after nodemon installation" })
})


// listen to PORT 
api.listen(5000)

