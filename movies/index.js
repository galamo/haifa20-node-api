const express = require("express")
const router = express.Router()
const { isAuthenticated } = require("../auth/handlers/login")
const logger = require("../logger")
const getMovies = require("./getMoviesApi")
const getValidationFunction = require("./validations")
// router.use((req, res, next) => {
//     if (isAuthenticated(req.headers.authorization)) return next();
//     logger.info("User Got 401");
//     return res.status(401).send("isAuthenticated Unauthorised")
// })


router.get("/search", getValidationFunction("search"), async (req, res, next) => {
    const { searchBy, inputValue } = req.query
    if (!searchBy || !inputValue) return res.json({ error: "invalid params" })
    if (searchBy.length !== 1) return
    const results = await getMovies(inputValue, searchBy)
    logger.info(`Number of result From API: ${results && results.length}`)
    res.json({ results })
})

router.get("/:id/", getValidationFunction("movie"), async (req, res, next) => {
    const { id } = req.params
    if (!id) return res.json({ error: "invalid params" })
    const result = await getMovies(id, "i")
    res.json({ byId: result })
})


module.exports = router;