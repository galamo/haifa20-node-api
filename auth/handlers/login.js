const { users } = require("../../data/users.file.json")

function login(userName, password) {
    const user = users.find((user) => user.userName === userName && user.password === password)
    return user || false
}

function setNewToken(token) {
    tokens[token] = new Date().toLocaleDateString();
}

function removeToken(token) {
    delete tokens[token]
}

function isAuthenticated(token) {
    const isToken = tokens[token];
    if (!isToken) return false;
    return true

}


const tokens = {}

module.exports = { login, setNewToken, removeToken, isAuthenticated }