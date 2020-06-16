function getDigit(num, position) {
    // let strarr = num.toString().split("").reverse();
    // for (let i = 0; i < strarr.length; i++) {
    //    if (i === position) {
    //        return strarr[i];
    //    }
    // }
return Math.floor(Math.abs(num)/(Math.pow(10,position)))%10
}

function digitCount(num) {
    if (num === 0) return 1
    return Math.floor(Math.log10(num) + 1)
}

function mostDigits(arrOfNumbers) {
    let mostDigit = 0;
    // for (let i = 0; i < arrOfNumbers.length; i++) {
    //     let count = digitCount(arrOfNumbers[i])
    //     if (mostDigit < count) {
    //         mostDigit = count;
    //     }
    // }

    for (let i = 0; i < arrOfNumbers.length; i++) {
        mostDigit = Math.max(mostDigit, digitCount(arrOfNumbers[i]))
    }
    return mostDigit;
}


function radixSort(array) {
    let numberOfDigits = mostDigits(array);
    for (let i = 0; i < numberOfDigits; i++) {
        let buckets = Array.from({length:10}, () => []);
        for (let m = 0; m < array.length; m++) {
            let indexPosition = getDigit(array[m],i);
            if (indexPosition !== undefined) {
                buckets[indexPosition].push(array[m]);
            }
        }

        //array = [].concat(...buckets)
        array = buckets.flat();
    }
    return array;
}


let numbersArray = [1,3,2234543,234,6245,755,7,543,2,345]
// console.log("Digit in a ith Place is " + getDigit(12345,4))
// console.log("Number of DIGITS in a Number " + digitCount(0))
// console.log("Most digit in a given array of Numbers " + mostDigits(numbersArray))
console.log(radixSort(numbersArray))
