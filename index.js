const express = require('express');
const config = require('./config');
const favoritesRoutes = require('./src/apps/api/movies/favorites/routes');
const mongoConnection = require('./src/connections/ormMongo');
const bodyParser = require('body-parser');
const { port } = config;
const app = express();

app.use(bodyParser.json());
app.use('/favorites', favoritesRoutes);
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
    mongoConnection();
});