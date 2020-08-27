const favoriteModel = require('./schema');

class Favorites {
    async add(movie) { // CREATE
        console.log({movie});
        return favoriteModel.create(movie);
    }
    
    getAll() { // READ
        return favoriteModel.find();
    }

    deleteById(movieId) { // DELETE
        console.log('movieId', movieId);
        return favoriteModel.findByIdAndDelete(movieId);
    }
}

module.exports =  new Favorites();