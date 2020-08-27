const express = require('express');
const config = require('./config');
const favoritesRoutes = require('./src/apps/api/movies/favorites/routes');
const mongoConnection = require('./src/connections/ormMongo');
const bodyParser = require('body-parser');
const cors = require('cors');
const { port } = config;
const app = express();

app.use(cors());
app.use(bodyParser.json());


app.get('/health', (req, res) => {
    console.log(req);
    res.send({ cpu: process.cpuUsage(), prop: req.newProp });
});

app.use('/favorites', favoritesRoutes);

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
    mongoConnection();
});