console.log("Server Start")
const { json } = require("express")
const express = require("express")
const bodyParser = require("body-parser")
const usersData = require("./data/users.json")
const carsData = require("./data/cars.json")
const authRouter = require("./auth")
const statsRouter = require("./statistics")
const statistics = require("./statistics/getStatistics")
const api = express()


api.use(bodyParser.json())
api.use((req, res, next) => {
    const currentUrl = req.url;
    const removeQueryParams = currentUrl.split("?")[0]
    console.log(removeQueryParams)
    if (statistics[removeQueryParams]) {
        statistics[removeQueryParams]++;
    } else {
        statistics[removeQueryParams] = 1
    }
    return next()
})


api.use("/auth", authRouter)



// api.use((req, res, next) => {
//     const isAuthenticated = isUserAuthenticated(req)
//     return isAuthenticated ? next() : res.status(401).send("User is Unauthorized")
//     // add code here
// })

function isUserAuthenticated(req) {
    const { authorization } = req.headers
    if (typeof authorization !== 'string') return;
    if (authorization !== 'token_12345') return;
    return true;

}

function newMiddleware() {
    return (req, res, next) => {
        console.log("inside ###### Middleware #######")
        console.log(req.url)
        next()
    }
}




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
api.get("/test-headers", (req, res, next) => {
    res.send("test-headers")
})



api.use("/", statsRouter)



function search(arr, searchBy, searchValue) {
    if (!Array.isArray(arr)) return;
    if (typeof searchBy !== 'string') return;
    if (!searchValue) return arr;
    const result = arr.filter(item => item[searchBy] === searchValue)
    return result;
}









// listen to PORT 
api.listen(5000)

