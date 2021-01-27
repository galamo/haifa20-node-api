
require("dotenv").config()
const { json } = require("express")
const express = require("express")
const bodyParser = require("body-parser")
const usersData = require("./data/users.json")
const carsData = require("./data/cars.json")
const authRouter = require("./auth")
const statsRouter = require("./statistics")
const moviesRouter = require("./movies/index")
const statistics = require("./statistics/getStatistics")
const cors = require("cors")
const logger = require("./logger")
const api = express()
const mysql2Promise = require("mysql2/promise")

// const connection = require("./database/index")
const fs = require("fs")








function writeToFile() {
    fs.appendFile("log/notifications.log", "Server Start \n", (err) => {
        if (err) {
            console.log("ERROR WRITING TO FILE")
        }
    })
}
writeToFile()
api.get("/orders", async (req, res, next) => {

    const { DB_SCHEMA, DB_USER, DB_PASSWORD, DB_PORT, DB_HOST } = process.env;
    console.log(DB_SCHEMA, DB_USER, DB_PASSWORD, DB_PORT, DB_HOST)
    const connection = await mysql2Promise.createConnection({
        host: DB_HOST,
        port: DB_PORT,
        user: DB_USER,
        password: DB_PASSWORD,
        database: DB_SCHEMA //schema
    });

    const [rows] = await connection.execute('SELECT * FROM northwind.orders')
    res.json(rows)
})
api.use(express.static("images"))

logger.info("Server started!")
const envParams = ["MAX_SESSION_TIME", "PORT"]
function validateEnvParams() {
    envParams.forEach((envParamName) => {
        if (!process.env[envParamName]) {
            console.log('\x1b[33m%s\x1b[0m', `Missing env param: ${envParamName}`);
            logger.error(`Missing env param: ${envParamName}`)
            setTimeout(() => {
                process.exit(1)
            }, 2000);
        }
    })
}
validateEnvParams()

api.use(cors())
api.use(bodyParser.json())
api.use((req, res, next) => {

    const currentUrl = req.url;
    const removeQueryParams = currentUrl.split("?")[0]
    logger.info(removeQueryParams)
    if (statistics[removeQueryParams]) {
        statistics[removeQueryParams]++;
    } else {
        statistics[removeQueryParams] = 1
    }
    return next()
})

api.use("/movies", moviesRouter)
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
api.listen(process.env.PORT)

