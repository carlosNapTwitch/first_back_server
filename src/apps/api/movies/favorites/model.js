const favoriteModel = require('./schema');

class Favorites {
    async add(movie) { // CREATE
        console.log({movie});
        return favoriteModel.create(movie);
    }
    
    getAll() { // READ
        return favoriteModel.find().exec();
    }

    deleteById(movieId) { // DELETE
        console.log('movieId', movieId);
        return favoriteModel.findByIdAndDelete(movieId);
    }

    filterMovie() {
        const myPormise = new Promise((resolve, reject) => {
            //proceso 
            if (true) resolve('todo bien')
            reject('un problema')
        });
        return myPormise;
    }
}

module.exports =  new Favorites();