

const mysql2Promise = require("mysql2/promise")


const { DB_SCHEMA, DB_USER, DB_PASSWORD, DB_PORT, DB_HOST } = process.env;
console.log(DB_SCHEMA, DB_USER, DB_PASSWORD, DB_PORT, DB_HOST)
const connection = mysql2Promise.createConnection({
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_SCHEMA //schema
});

module.exports = connection;