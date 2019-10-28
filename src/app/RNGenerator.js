const DBConnector = require('./DBConnector.js')

class RNGenerator{

    static DBConnection

    static getNumOfNoun(){
        if(!this.DBConnection){
            this.connectDB()
        }

        this.DBConnection.query('SELECT COUNT(*) FROM noun AS count', (err, result, filed)=>{
            if(err){
                console.error(err)
                return -1
            }

            return result[0].count
        })
    }

    static getNumOfAdjective(){
        if(!this.DBConnection){
            this.connectDB()
        }

        this.DBConnection.query('SELECT COUNT(*) FROM adjective AS count', (err, result, filed)=>{
            if(err){
                console.error(err)
                return -1
            }

            return result[0].count
        })
    }

    static getRandomName(){
        if(!this.DBConnection){
            this.connectDB()
        }

        var numOfNoun = this.getNumOfNoun()
        var numOfAdjective = this.getNumOfAdjective()

        if(numOfNoun == -1 || numOfAdjective == -1){
            return false
        }

        var idOfNoun = Math.floor(Math.random()*numOfNoun)
        var idOfAdjective = Math.floor(Math.random()*numOfAdjective)

        var noun , adjective
        
        this.DBConnection.query(`SELECT noun FROM noun WHERE id = ${idOfNoun}`, (err, result, filed) =>{
            if(err){
                console.error(err)
                return false
            }

            noun = result[0].noun
        })

        this.DBConnection.query(`SELECT adjective FROM adjective WHERE id = ${idOfAdjective}`, (err, result, filed) =>{
            if(err){
                console.error(err)
                return false
            }

            adjective = result[0].adjective
        })

        return adjective+noun
    }

    static connectDB(){
        this.DBConnection = DBConnector.getConnection()
    }
}

RNGenerator.getRandomName()

module.export = RNGenerator