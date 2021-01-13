const { users } = require("../../data/users.file.json")
const moment = require("moment")







function login(userName, password) {
    const user = users.find((user) => user.userName === userName && user.password === password)
    return user || false
}

function setNewToken(token) {
    tokens[token] = moment().utc().toString()
}

function removeToken(token) {
    delete tokens[token]
}

function isAuthenticated(token) {
    const tokenValue = tokens[token];
    if (!tokenValue) return false;
    console.log(tokenValue)
    console.log(tokenValue)
    if (!validateTokenExpiration(tokenValue)) return false;
    return true

}
function validateTokenExpiration(date) {
    const { MAX_SESSION_TIME } = process.env
    const currentTime = moment().utc()
    const tokenTime = moment(date)
    console.log(`currentTime: ${currentTime} ###### tokenTime: ${tokenTime}`)
    const diffTimeMinutes = currentTime.diff(tokenTime, "minutes")
    console.log(MAX_SESSION_TIME > diffTimeMinutes)
    return MAX_SESSION_TIME > diffTimeMinutes
}




const tokens = {}

module.exports = { login, setNewToken, removeToken, isAuthenticated }