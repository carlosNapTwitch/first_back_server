const express = require('express');
const config = require('./config');
const favoritesRoutes = require('./src/apps/api/movies/favorites/routes');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.json());


const { port } = config;

app.use('/favorites', favoritesRoutes);

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});