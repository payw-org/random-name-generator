const DBNouns = require('../db/DBNouns')
const DBAdjectives = require('../db/DBAdjectives')

class RNGenerator{

    static async getRandomName(){
        var result, noun, adjective
        var numOfNoun, numOfAdjective
        var idOfNoun, idOfAdjective

        result = await DBNouns.selectAllCount()
        numOfNoun = result.count
        result = await DBAdjectives.selectAllCount()
        numOfAdjective = result.count

        if(numOfNoun == 0 || numOfAdjective == 0)
            return '고장난 서버'

        indexOfNoun = Math.floor(Math.random()*numOfNoun)
        indexOfAdjective = Math.floor(Math.random()*numOfAdjective)
        
        result = await DBNouns.selectByIndex(indexOfNoun)
        noun = result[0].name
        result = await DBAdjectives.selectByIndex(indexOfAdjective)
        adjective = result[0].name
        
        return adjective + ' ' +  noun
    }
}

module.exports = RNGenerator