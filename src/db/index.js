const DBConnector = require('../app/DBConnector')

module.exports = class DB{
    
    static async query(query, values=null){
        var result
        if(!this.conn){
            this.conn = await DBConnector.getConnection()
        }

        try{
            if(values === null){// null?
                ;[result] = await this.conn.query(query)
            }   
            else{
                ;[result] = await this.conn.query(query, values)
            }
            return result
        }catch(e){
            console.log(e)
        }

    }
}