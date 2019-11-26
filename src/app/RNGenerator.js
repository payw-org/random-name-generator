const DBConnector = require('./DBConnector.js')

class RNGenerator{

    static async getNumOfNoun(){
        if(!this.DBConnection){
            await this.connectDB()
        }

        const [ result ] = await this.DBConnection.query('SELECT COUNT(*) AS count FROM nouns')
        return result[0].count
    }

    static async getNumOfAdjective(){
        if(!this.DBConnection){
            await this.connectDB()
        }

        const [ result ] = await this.DBConnection.query('SELECT COUNT(*) AS count FROM adjectives')
        return result[0].count
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

        var idOfNoun = Math.floor(Math.random()*numOfNoun)
        var idOfAdjective = Math.floor(Math.random()*numOfAdjective)
        
        var result, noun , adjective
        
        ;[ result ] = await this.DBConnection.query(`SELECT name FROM nouns WHERE _id = ${idOfNoun}`)
        noun = result[0].name

        ;[ result ] = await this.DBConnection.query(`SELECT name FROM adjectives WHERE _id = ${idOfAdjective}`)
        adjective = result[0].name
        
        return adjective + ' ' +  noun
    }

    static async connectDB(){
        console.log('get connection')
        this.DBConnection = await DBConnector.getConnection()
    }
}

module.exports = RNGenerator