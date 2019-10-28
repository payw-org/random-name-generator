const mysql = require('mysql')
const mysql_config = require('../config/db.connect.config')

class DBConnector {
    
    static connect(){
        this.connection = mysql.createConnection(mysql_config)

        this.connection.connect((err)=>{
            if(err){
                console.error('error connecting \n' + err.stack)
                return
            }

            console.log('connected as id ' + this.connection.threadId)
        })
    }

    static getConnection (){
        if(!this.connection){
            this.connect()
        }
        
        return this.connection
    }

}

module.exports = DBConnector