console.log("Server Start")
const express = require("express")

const api = express()


api.get("/message", (req, res, next) => {
    res.send("this is the first api created")
})


api.get("/current-time", (req, res, next) => {
    const time = new Date().toUTCString()
    res.json({ currentTime: time, message: "This is after nodemon installation" })
})

const users = ["gal", "liad", "dekel", "hilal", "sapir", "ofir", "noam"]

api.get("/find/user", (request, response) => {
    console.log("========================")
    console.log(request.query)
    console.log(request.url)
    console.log("========================")

    const { userName } = request.query
    if (typeof userName !== 'string') return response.send("Missing parameter userName")
    const result = users.find(user => user.includes(userName.toLocaleLowerCase()))
    const isExist = result ? true : false
    return response.json({ isUserExist: isExist })
})


// listen to PORT 
api.listen(5000)

