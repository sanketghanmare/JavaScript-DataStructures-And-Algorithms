function sumArray(arr) {
    let sum = 0;
    arr.forEach(function (a) {
       sum += a;
    })
    return sum;
}

console.log(sumArray([1,2,3,4]))
console.log(sumArray([1,2,3,4,-100]))
