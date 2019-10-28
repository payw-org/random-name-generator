const DBConnector = require('./DBConnector.js')

class RNGenerator{

    static DBConnection

    static getRandomName(){
        if(!this.DBConnection){
            this.connectDB()
        }

        this.DBConnection.query('SELECT COUNT(*) FROM noun', (err, result, filed)=>{
            if(err){
                throw err
            }

            console.log(result)
        })
    }

    static connectDB(){
        this.DBConnection = DBConnector.getConnection()
    }
}

RNGenerator.getRandomName()

module.export = RNGenerator