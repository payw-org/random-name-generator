const DBConnector = require('./DBConnector.js')

class RNGenerator{

    static async getNumOfNoun(){
        if(!this.DBConnection){
            await this.connectDB()
        }

        await this.DBConnection.query('SELECT COUNT(*) AS count FROM noun', (err, result, filed)=>{
            if(err){
                console.error(err)
                return -1
            }
            return result[0].count
        })
    }

    static async getNumOfAdjective(){
        if(!this.DBConnection){
            await this.connectDB()
        }

        await this.DBConnection.query('SELECT COUNT(*) AS count FROM adjective', (err, result, filed)=>{
            if(err){
                console.error(err)
                return -1
            }

            return result[0].count
        })
    }

    static async getRandomName(){
        if(!this.DBConnection){
            await this.connectDB()
        }

        var numOfNoun = await this.getNumOfNoun()
        var numOfAdjective = await this.getNumOfAdjective()

        if(numOfNoun == -1 || numOfAdjective == -1){
            return false
        }
        console.log(numOfAdjective)
        console.log(numOfNoun)

        var idOfNoun = Math.floor(Math.random()*numOfNoun)
        var idOfAdjective = Math.floor(Math.random()*numOfAdjective)

        var noun , adjective
        
        await this.DBConnection.query(`SELECT noun FROM noun WHERE _id = ${idOfNoun}`, (err, result, filed) =>{
            if(err){
                console.error(err)
                return false
            }

            noun = result[0].noun
        })

        await this.DBConnection.query(`SELECT adjective FROM adjective WHERE _id = ${idOfAdjective}`, (err, result, filed) =>{
            if(err){
                console.error(err)
                return false
            }

            adjective = result[0].adjective
        })

        return adjective+noun
    }

    static async connectDB(){
        this.DBConnection = await DBConnector.getConnection()
    }
}

console.log(RNGenerator.getRandomName())

module.export = RNGenerator