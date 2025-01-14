class Pair {
  constructor(key, val) {
    this.val = val;
    this.key = key;
  }
}

class HashMap {
  constructor() {
    this.size = 0;
    this.capacity = 2;
    this.map = new Array(this.capacity).fill(null);
  }

  hash(key) {
    let index = 0;
    for (let c in key) {
      index += key.charCodeAt(i);
    }
    return index % this.capacity;
  }
  rehash() {
    this.capacity = 2 * this.capacity;
    const newMap = new Array(this.capacity).fill(null);
    let oldMap = this.map;
    this.map = newMap;
    this.size = 0;
    for (let pair in oldMap) {
      if (pair) {
        this.put(pair.key, pair.val);
      }
    }
  }

  get(key) {
    const index = this.hash(key);
    while (this.map[index] !== null) {
      if (this.map[index].key == key) {
        return this.map[index].val;
      }
      index++;
      index = index % this.capacity;
    }
    return null;
  }

  put(key, val) {
    let index = this.hash(key);
    while (true) {
      if (this.map[index] == null) {
        this.map[index] = new Pair(key, val);
        this.size++;
        if (this.size >= this.capacity / 2) {
          this.rehash();
        }
        return;
      } else if (this.map[index].key == key) {
        this.map[key].val == val;
        return;
      }
      index++;
      index = index % this.capacity;
    }
  }
}
