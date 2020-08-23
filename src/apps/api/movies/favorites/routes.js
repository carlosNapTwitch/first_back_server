const expres = require('express');
const favModel = require('./model');
const router = expres.Router();

// Definimos todas las rutas necesarias
router.get('/', async(req, res) => {
    res.send({ list: await favModel.getAll()});
});

router.post('/', async (req, res) => {
    try {
        console.log(req.body);
        const favCreated = await favModel.add(req.body);
        res.send({...favCreated});
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
})

module.exports = router;
