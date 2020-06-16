function StringyfyNumbers(obj) {

    const key = Object.keys(obj)

    for (const key of Object.keys(obj)) {
        const val = obj[key]

        if (typeof val === "number") {
            obj[key] = val.toString();
        } else if (val instanceof Object && Object.keys(val).length > 0){
            StringyfyNumbers(val)
        } else {

        }
    }

    return obj;
}


const obj1 = {
    outer: 2,
    obj: {
        inner: 2,
        otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: "yup"
        }
    }
};

var obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
};

console.log(StringyfyNumbers(obj1)); // 6
console.log(StringyfyNumbers(obj2)); // 10

function stringifyNumbers(obj) {
    var newObj = {};
    for (var key in obj) {
        if (typeof obj[key] === 'number') {
            newObj[key] = obj[key].toString();
        } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
            newObj[key] = stringifyNumbers(obj[key]);
        } else {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}

var newObj = {}
for (const key in obj) {
    if (typeof obj[key] === 'number') {
        newObj[key] = obj[key].toString();
    } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])){
        newObj[key] = stringyfyNumbers(obj[key])
    } else {
        newObj[key] = obj[key]
    }
}
return newObj;
