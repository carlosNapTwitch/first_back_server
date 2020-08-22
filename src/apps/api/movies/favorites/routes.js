const expres = require('express');
const favModel = require('./model');
const router = expres.Router();

// Definimos todas las rutas necesarias
router.get('/', (req, res) => {
    console.log(req.body);
    res.send({ list: favModel.getAll()});
});

router.post('/', (req, res) => {
    favModel.add(req.body);
    res.send({msg: 'add success'});
})

module.exports = router;
