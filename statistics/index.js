const express = require("express")
const statistics = require("./getStatistics")
const router = express.Router()
const { isAuthenticated } = require("../auth/handlers/login")
const logger = require("../logger")

router.use((req, res, next) => {
    if (isAuthenticated(req.headers.authorization)) return next();
    logger.info("User Got 401");
    return res.status(401).send("isAuthenticated Unauthorised")
})

router.get("/statistics", (req, res, next) => {
    res.json(statistics)
})


module.exports = router;