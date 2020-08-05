class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size)
    }

    _hash(key) {
        let total = 0;
        let WERID_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WERID_PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    set(key, value) {
        let index = this._hash(key);
        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value])
    }

    get(key) {
        let index = this._hash(key);
        if (this.keyMap[index]) {
            for (let i = 0; i < this.keyMap[index].length; i++) {
                if (key === this.keyMap[index][i][0]) {
                    return this.keyMap[index][i][1];
                }
            }
        }
        return undefined
    }

    keys() {
        let arrKeys = []
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!arrKeys.includes(this.keyMap[i][j][0])) {
                        arrKeys.push(this.keyMap[i][j][0])
                    }
                }
            }
        }
        return arrKeys;
    }

    values() {
        let arrValues = []
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!arrValues.includes(this.keyMap[i][j][1])) {
                        arrValues.push(this.keyMap[i][j][1])
                    }
                }
            }
        }
        return arrValues;
    }
}

let ht = new HashTable();
ht.set("aa", "hello");
ht.set("bb", "How");
ht.set("cc", "Are");
ht.set("dd", "You");
ht.set("ee", "?");
ht.set("ff", "?");
ht.set("gg", "?");
ht.set("gg", "?");
// console.log(ht.keys())
// console.log(ht.values())

ht.keys().forEach(function (key) {
    console.log(ht.get(key))
})
