const DBNouns = require('../../db/DBNouns')

async function selectAll(req, res) {
    var result = await DBNouns.selectAll()
    res.send(result)
}

async function insertByName(req, res) {
    var result = await DBNouns.insertByName(req.body.name)
    if(result){
        res.sendStatus(200)
    }
    else{
        res.send(`${req.body.name} is already exist`)        
    }
}

async function deleteByName(req, res) {
    var result = await DBNouns.deleteByName(req.body.name)
    if(result){
        res.sendStatus(200)
    }
    else{
        res.send(`${req.body.name} is not exist`)        
    }
}

module.exports.selectAll = selectAll
module.exports.insertByName = insertByName
module.exports.deleteByName = deleteByName