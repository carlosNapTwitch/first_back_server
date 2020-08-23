const MongoClient = require('mongodb').MongoClient;

const dbHostUrl = 'mongodb://localhost:27017';
const dbName = 'movies';

const mongoConnection = () => {
    MongoClient.connect(dbHostUrl, (err, client) => {
        if (err){ console.log('error on mongodb connection', err); process.exit(); }
        else console.log('success on mongodb connection');

        const db = client.db(dbName);
        createCollection(db, async() => {
            try {
                console.log('connection closed');
                agregarDato(db);
            } catch (error) {
                console.log('error on closing connection');
            }
        });
    });
}

const createCollection = (db, callback) => {
    db.createCollection('favorites', (err, result) => {
        console.log('Collection created', result);
        callback();
    });
}

const agregarDato = (db) => {
    db.collection('favorite').insertOne({
        id: '13329896',
        title: 'my first fav movie'
    }, (err, result) => {
        if (err) console.log('error on creating a fav movie', err);
        else console.log('success on create a fav movie', result);
    })
}

module.exports = mongoConnection;