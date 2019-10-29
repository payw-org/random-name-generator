const mysql = require('mysql')
const mysql_config = require('../config/db.connect.config')

class DBConnector {

    static async connect(){
        this.connection = mysql.createConnection(mysql_config)

        await this.connection.connect((err)=>{
            if(err){
                console.error('error connecting \n' + err.stack)
                return
            }

            console.log('connected as id ' + this.connection.threadId)
        })
    }

    static async getConnection (){
        if(!this.connection){
            await this.connect()
        }
        
        return this.connection
    }

}

module.exports = DBConnector