const DB = require('./index')

async function selectAll() {
    var query = `SELECT * FROM adjectives`

    var result = await DB.query(query)
    return result
}

async function selectNum(){
    var query = `SELECT COUNT(*) AS count FROM adjectives`

    var result = await DB.query(query)
    return result
}

async function selectById(_id){
    var query = `SELECT name FROM adjectives WHERE _id = ?`
    var values = [_id]
    var result = await DB.query(query, values)
    return result
}

async function insertByName(name) {
    var query = `SELECT _id FROM adjectives WHERE name = ?`
    var values = [name]
    
    var result = await DB.query(query, values)

    if (result.length === 0) {
        query = `INSERT INTO adjectives (name) VALUES (?)`
        await DB.query(query, values)
        return true
    }

    // duplicate exist
    return false
}

async function deleteByName(name) {
    var query = `SELECT _id FROM adjectives WHERE name = ?`
    var values = [name]    
    var result = await DB.query(query, values)

    if (result.length !== 0) {
        query = `DELETE FROM adjectives WHERE _id = ?`
        values = [result[0]._id]
        await DB.query(query, values)
        return true
    }
    
    // not exist 
    return false
}

module.exports.selectAll = selectAll
module.exports.selectNum = selectNum
module.exports.selectById = selectById
module.exports.insertByName = insertByName
module.exports.deleteByName = deleteByName
