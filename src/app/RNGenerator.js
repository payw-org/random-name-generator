const DBNouns = require('../db/DBNouns')
const DBAdjectives = require('../db/DBAdjectives')

class RNGenerator{

    static async getRandomName(){
        var result, noun, adjective
        var numOfNoun, numOfAdjective
        var idOfNoun, idOfAdjective

        result = await DBNouns.selectNum()
        numOfNoun = result.count
        result = await DBAdjectives.selectNum()
        numOfAdjective = result.count

        if(numOfNoun == 0 || numOfAdjective == 0)
            return '고장난 서버'

        idOfNoun = Math.floor(Math.random()*numOfNoun)
        idOfAdjective = Math.floor(Math.random()*numOfAdjective)
        
        result = await DBNouns.selectById(idOfNoun)
        noun = result[0].name
        result = await DBAdjectives.selectById(idOfAdjective)
        adjective = result[0].name
        
        return adjective + ' ' +  noun
    }
}

module.exports = RNGenerator