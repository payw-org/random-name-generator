require('dotenv').config()

const env = {
    mysql: {
        user    : process.env.MYSQL_ID,
        password: process.env.MYSQL_PW,
        database: process.env.MYSQL_NAME
    }
}

module.exports = env