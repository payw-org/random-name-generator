require('dotenv').config()

const env = {
    host    : process.env.MYSQL_HOST,
    user    : process.env.MYSQL_ID,
    password: process.env.MYSQL_PW,
    database: process.env.MYSQL_NAME,
    connectionLimit: 10
}

module.exports = env