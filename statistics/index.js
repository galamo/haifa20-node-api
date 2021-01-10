const express = require("express")
const statistics = require("./getStatistics")
const router = express.Router()
const { isAuthenticated } = require("../auth/handlers/login")

router.use((req, res, next) => {
    if (isAuthenticated(req.headers.authorization)) return next();
    return res.status(401).send("isAuthenticated Unauthorised")
})

router.get("/statistics", (req, res, next) => {
    res.json(statistics)
})


module.exports = router;