const DBConnection = require('../DBConnector').getConnection()

async function selectAll(req, res) {
    try {
        var [result] = await DBConnection.query(`SELECT * FROM adjectives`)
        return result
    } catch (e) {
        console.log(`>Error - ${e}`)
    }
}

async function insertByName(req, res) {
    try {
        var name = req.body.name
        var [result] = await DBConnection.query(`SELECT _id FROM adjectives WHERE name = '${name}'`)

        if (result.length === 0) {
            await DBConnection.query(`INSERT INTO adjectives (name) VALUES (${name})`)
            res.sendStatus(200)
        }
        else {// duplicate exist
            res.send(`${name} is already exist`)
        }
    } catch (e) {
        console.log(`>Error - ${e}`)
    }
}

async function deleteByName(req, res) {
    try {
        var name = req.body.name
        var [result] = await DBConnection.query(`SELECT _id FROM adjectives WHERE name = '${name}'`)

        if (result.length !== 0) {
            await DBConnection.query(`DELETE FROM adjectives WHERE _id = ${result[0]._id}`)
            res.sendStatus(200)
        }
        else { // not exist
            res.send(`${name} is not exist`)
        }
    } catch (e) {
        console.log(`>Error - ${e}`)
    }
}

module.exports.selectAll = selectAll
module.exports.insertByName = insertByName
module.exports.deleteByName = deleteByName