const expres = require('express');
const favModel = require('./model');
const router = expres.Router();

// Definimos todas las rutas necesarias
router.get('/', async(req, res) => {
    res.send(await favModel.getAll());
});

router.post('/', async (req, res) => {
    try {
        const favCreated = await favModel.add(req.body);
        res.send({...favCreated});
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.delete('/:movieId', async(req, res) => {
    try {
        const { movieId } = req.params;
        if(!movieId) {
            res.status(403).send({ code: 403, message: 'Movie ID param is required for delete'});
            return;
        }
        const resultOnDelete = await favModel.deleteById(movieId);
        if (!resultOnDelete) {
            res.status(404).send({ code: 404, message: `Fav movie: ${movieId} not found`});
            return;
        }
        res.send({result: resultOnDelete});
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.get('/test', async(req, res) => {
    try {
        const resolve = await favModel.filterMovie();
        res.send(resolve);
    }catch(error){
        res.status(500).send({error});
    }
})

module.exports = router;
