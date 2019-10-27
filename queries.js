const Pool = require('pg').Pool

const pool = new Pool({
    user: 'me',
    host:'localhost',
    database: 'api',
    password: 'password',
    port: 5432,
})

const getGameNames = (req, res) => {

    pool.query('select name, price, publisher from steam_data', (err, results) => {
        if(err) {
            console.log(err);
            throw err
        }
        res.status(200).json(results)
    })
}


const editGame = (req, res) => {
    const gameName = req.query.gameName;
    const gamePrice = req.query.gamePrice;
    const gamePublisher = req.query.gamePublisher;
    const getNameQuery = `insert into steam_data (name, price, publisher) values ('" + ${gameName} + "', ' ${gamePrice} ', '" + ${gamePublisher} + "')`;
    
    //${gamePrice}, ${gamePublisher}
    pool.query(getNameQuery, (err, results) => {
        if(err) {
            console.log(err);
            throw err
        }
    });

    pool.query('select name from steam_data', (err, results) => {
        if(err) {
            console.log(err);
            throw err
        }
        res.status(200).json(results)
    })
}

const addGame = (req, res) => {
    const gameName = req.query.gameName;
    const gamePrice = req.query.gamePrice;
    const gamePublisher = req.query.gamePublisher;
    const getNameQuery = `insert into steam_data (name, price, publisher) values ('" + ${gameName} + "', ' ${gamePrice} ', '" + ${gamePublisher} + "')`;
    
    //${gamePrice}, ${gamePublisher}
    pool.query(getNameQuery, (err, results) => {
        if(err) {
            console.log(err);
            throw err
        }
    });

    pool.query('select name from steam_data', (err, results) => {
        if(err) {
            console.log(err);
            throw err
        }
        res.status(200).json(results)
    })
}
module.exports = {
    getGameNames,
    addGame,
    editGame
}