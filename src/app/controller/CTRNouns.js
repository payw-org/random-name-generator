const DBNouns = require('../../db/DBNouns')

async function selectAll(req, res) {
    var result = await DBNouns.selectAll()
    res.send(result)
}

async function insertByName(req, res) {

    if(req.body.masterKey==config.password){
        var result = await DBNouns.insertByName(req.body.name)
        if(result){
            res.send('200')
        }
        else{
            res.send(`${req.body.name} is already exist`)        
        }
    }
    else{
        res.send(`password is wrong`)  
    }
}

async function deleteByName(req, res) {
    if(req.body.masterKey==config.password){
        var result = await DBNouns.deleteByName(req.body.name)
        if(result){
            res.send('200')
        }
        else{
            res.send(`${req.body.name} is not exist`)        
        }
    }
    else{
        res.send(`password is wrong`)  
    }
}

module.exports.selectAll = selectAll
module.exports.insertByName = insertByName
module.exports.deleteByName = deleteByName