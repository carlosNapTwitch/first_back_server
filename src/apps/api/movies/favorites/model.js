const favoriteModel = require('./schema');

class Favorites {
    async add(movie) { // CREATE
        console.log({movie});
        return favoriteModel.create(movie);
    }
    
    getAll() { // READ
        return favoriteModel.find();
    }

    remove(movieId) { // DELETE
        const itemToRemove = this.list.find((item, idx) => item.id === movieId);
        const indexToRemove = this.list.indexOf(itemToRemove);
        const elementoRemoved = this.list.splice(indexToRemove, 1);
        return elementoRemoved;
    }
}

module.exports =  new Favorites();