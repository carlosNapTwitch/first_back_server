const mongoose = require('mongoose');

const connectToDb = () => {
    const dbHost = 'mongodb://localhost/';
    const dBname = 'movies';
    const connectionOptions = { useNewUrlParser: true, useUnifiedTopology: true };
    mongoose.connect(`${dbHost}${dBname}`, connectionOptions);

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        console.log('we are connected');
    });
}

module.exports = connectToDb;
