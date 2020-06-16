function nestedEvenSum (obj) {

    const key = Object.keys(obj)

    let evenSum = 0;
    
    for (const key of Object.keys(obj)) {
        const val = obj[key]
        if (typeof val === "number" && val%2 === 0) {
            evenSum = evenSum + val;
        } else if (val instanceof Object && Object.keys(val).length > 0){
            evenSum += nestedEvenSum(val)
        } else {

        }
    }

    return evenSum;
}


var obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
};
 // 6
console.log(nestedEvenSum(obj2)); // 10
