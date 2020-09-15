const mongoose = require('mongoose');

const connectToDb = () => {
    //const dbHost = 'mongodb://localhost/';
    const dbName = 'movies';
    const dbHost = `mongodb+srv://mySuperUser:777ABCD@clustertwitch.c6i0x.mongodb.net/${dbName}?retryWrites=true&w=majority`;

    const connectionOptions = { useNewUrlParser: true, useUnifiedTopology: true };
    mongoose.connect(`${dbHost}${dbName}`, connectionOptions);

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        console.log('we are connected');
    });
}

module.exports = connectToDb;
