function isUniform(arr) {
let a = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (a !== arr[i]) {
            return false
        }

    }
    return true;
}

console.log(isUniform([1,1,1,1,1,1,1,1,1,1]))
console.log(isUniform([1,1,1,1,1,1,1,1,1,2]))
console.log(isUniform(["a","a","b"]))
