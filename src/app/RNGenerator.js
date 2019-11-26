const DBNouns = require('../db/DBNouns')
const DBAdjectives = require('../db/DBAdjectives')

class RNGenerator{

    static async getRandomName(){
        var result, noun, adjective
        var numOfNoun, numOfAdjective
        var indexOfNoun, indexOfAdjective

        result = await DBNouns.selectAllCount()
        console.log('noun Count')
        console.log(result)
        numOfNoun = result[0].count
        result = await DBAdjectives.selectAllCount()
        console.log('adjective Count')
        console.log(result)
        numOfAdjective = result.count

        if(numOfNoun == 0 || numOfAdjective == 0)
            return '고장난 서버'

        indexOfNoun = Math.floor(Math.random()*numOfNoun)
        indexOfAdjective = Math.floor(Math.random()*numOfAdjective)
        
        console.log('indexOfNoun')
        console.log(indexOfNoun)
        console.log('indexOfAdjective')
        console.log(indexOfAdjective)
        result = await DBNouns.selectByIndex(indexOfNoun)
        console.log('selectByIndex')
        console.log(result)
        noun = result[0].name
        result = await DBAdjectives.selectByIndex(indexOfAdjective)
        console.log('selectByIndex')
        console.log(result)
        adjective = result[0].name
        
        return adjective + ' ' +  noun
    }
}

module.exports = RNGenerator