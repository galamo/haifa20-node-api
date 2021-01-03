console.log("script start")
const express = require("express")

const api = express()


api.get("/message", (req, res, next) => {
    res.send("this is the first api created")
})

api.get("/current-time", (req, res, next) => {
    const time = new Date().toUTCString()
    console.log(time)
    res.json({ currentTimeIS: time })
})


// listen to PORT 
api.listen(5000)

console.log("script end")