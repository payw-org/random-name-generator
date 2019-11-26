const DB = require('./index')

async function selectAll() {
    var query = `SELECT * FROM nouns`

    var result = await DB.query(query)
    return result
}

async function selectAllCount(){
    var query = `SELECT COUNT(*) AS count FROM nouns`

    var result = await DB.query(query)
    return result
}

async function selectByIndex(index){
    var query = `SELECT name FROM nouns ORDER BY _id DESC LIMIT ?, 1`
    var values = [index]
    var result = await DB.query(query, values)
    return result
}

async function insertByName(name) {
    var query = `SELECT _id FROM nouns WHERE name = ?`
    var values = [name]
    
    var result = await DB.query(query, values)

    if (result.length === 0) {
        query = `INSERT INTO nouns (name) VALUES (?)`
        await DB.query(query, values)
        return true
    }

    // duplicate exist
    return false
}

async function deleteByName(name) {
    var query = `SELECT _id FROM nouns WHERE name = ?`
    var values = [name]    
    var result = await DB.query(query, values)

    if (result.length !== 0) {
        query = `DELETE FROM nouns WHERE _id = ?`
        values = [result[0]._id]
        await DB.query(query, values)
        return true
    }
    
    // not exist 
    return false
}

module.exports.selectAll = selectAll
module.exports.selectAllCount = selectAllCount
module.exports.selectByIndex = selectByIndex
module.exports.insertByName = insertByName
module.exports.deleteByName = deleteByName
