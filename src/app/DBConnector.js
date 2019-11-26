const mysql = require('mysql2/promise')
const mysql_config = require('../config/db.connect.config')

class DBConnector {

    static async getConnection (){
        if(!this.connection){
            this.connection = await mysql.createPool(mysql_config)
        }
        
        return this.connection
    }
}

module.exports = DBConnector