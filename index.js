console.log("Server Start")
const { json } = require("express")
const express = require("express")
const bodyParser = require("body-parser")
const usersData = require("./data/users.json")
const carsData = require("./data/cars.json")
const api = express()

api.use((req, res, next) => {
    console.log("this code will run on every request to the server")
    console.log(req.url)
    next()
})
api.use(bodyParser.json())

api.get("/users", (req, res, next) => {
    // param1 = searchBy
    // param2 = searchValue
    const { searchBy, searchValue } = req.query
    if (typeof searchBy !== 'string') return res.status(400).json({ message: "invalidParams" });
    if (!searchValue) return res.json({ data: usersData.results });
    const handlerResult = search(usersData.results, searchBy, searchValue)
    res.json({ data: handlerResult });
})

api.get("/cars", (req, res, next) => {
    // param1 = searchBy
    // param2 = searchValue
    const { searchBy, searchValue } = req.query
    if (typeof searchBy !== 'string') return res.status(400).json({ message: "invalidParams" });
    if (!searchValue) return res.json({ data: usersData.results });
    const handlerResult = search(carsData, searchBy, searchValue)
    res.json({ data: handlerResult });
})

api.post("/user", (req, res, next) => {

    console.log(req.body)
    usersData.results.push(req.body)
    res.send("User Created!")
})



function search(arr, searchBy, searchValue) {
    if (!Array.isArray(arr)) return;
    if (typeof searchBy !== 'string') return;
    if (!searchValue) return arr;
    const result = arr.filter(item => item[searchBy] === searchValue)
    return result;
}









// listen to PORT 
api.listen(5000)

