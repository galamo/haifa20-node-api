const express = require("express")
const loginHandler = require("./handlers/login")
const router = express.Router()
const getToken = require("./handlers/getToken")
const logger = require("../logger")
const tokens = {}

router.post("/login", (req, res, next) => {

    const { userName, password } = req.body
    logger.info(`userName: ${userName} , password: ${password}`)
    if (!userName || !password) return res.send("Invalid Params")

    const result = loginHandler.login(userName, password)
    if (result) {
        const token = getToken();
        res.setHeader("authorization", token)
        res.cookie("token", token)
        tokens[token] = new Date().toString()
        loginHandler.setNewToken(token)
        return res.json({ message: "login success", token: token })
    }
    else return res.send("login failed")
})

router.post("/logout", (req, res, next) => {
    loginHandler.removeToken(req.headers.authorization)
    res.send("logout success")
})

module.exports = router