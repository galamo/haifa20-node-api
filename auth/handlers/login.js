const { users } = require("../../data/users.file.json")
const moment = require("moment")
const logger = require("../../logger")





function login(userName, password) {
    const user = users.find((user) => user.userName === userName && user.password === password)
    return user || false
}

function setNewToken(token) {
    tokens[token] = moment().utc().toString()
}

function removeToken(token) {
    logger.info(`token: ${token} removed`)
    delete tokens[token]
}

function isAuthenticated(token) {
    const tokenValue = tokens[token];
    if (!tokenValue) return false;

    if (!validateTokenExpiration(tokenValue)) return false;
    return true

}
function validateTokenExpiration(date) {
    const { MAX_SESSION_TIME } = process.env
    const currentTime = moment().utc()
    const tokenTime = moment(date)
    logger.info(`currentTime: ${currentTime} ###### tokenTime: ${tokenTime}`)
    const diffTimeMinutes = currentTime.diff(tokenTime, "minutes")
    logger.info(`session expired: ${!(MAX_SESSION_TIME > diffTimeMinutes)}`)
    return MAX_SESSION_TIME > diffTimeMinutes
}




const tokens = {}

module.exports = { login, setNewToken, removeToken, isAuthenticated }