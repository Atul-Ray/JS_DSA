
class HashTable {
    constructor(size = 50) {
      this.table = new Array(size);
      this.size = size;
    }
  
    _hash(key) {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i);
      }
      return hash % this.size;
    }
  
    set(key, value) {
      const index = this._hash(key);
      if (!this.table[index]) {
        this.table[index] = [];
      }
      this.table[index].push([key, value]);
    }
  
    get(key) {
      const index = this._hash(key);
      if (this.table[index]) {
        for (let i = 0; i < this.table[index].length; i++) {
          if (this.table[index][i][0] === key) {
            return this.table[index][i][1];
          }
        }
      }
      return undefined;
    }
  
    remove(key) {
      const index = this._hash(key);
      if (this.table[index]) {
        for (let i = 0; i < this.table[index].length; i++) {
          if (this.table[index][i][0] === key) {
            this.table[index].splice(i, 1);
            return true;
          }
        }
      }
      return false;
    }
  }
  
const h1 = new HashTable(10);

h1.set
