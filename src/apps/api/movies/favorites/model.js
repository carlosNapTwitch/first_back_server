class Favorites {
    constructor() {
        this.list = [];
    }
  
    add(movie) { // CREATE
        this.list.push(movie);
    }
    
    getAll() { // READ
        return this.list;
    }

    remove(movieId) { // DELETE
        const itemToRemove = this.list.find((item, idx) => item.id === movieId);
        const indexToRemove = this.list.indexOf(itemToRemove);
        const elementoRemoved = this.list.splice(indexToRemove, 1);
        return elementoRemoved;
    }
}

module.exports =  new Favorites();