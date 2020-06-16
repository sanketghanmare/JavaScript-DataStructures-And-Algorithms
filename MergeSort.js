function Merge(array1, array2) {
    let counter1 = 0
    let counter2 = 0

    let newArray = []

    while(counter1 < array1.length && counter2 < array2.length) {
        if (array1[counter1] < array2[counter2]) {
            newArray.push(array1[counter1])
            counter1++;
        } else {
            newArray.push(array2[counter2])
            counter2++
        }
    }

    while (counter2 < array2.length) {
        newArray.push(array2[counter2])
        counter2++
    }

    while (counter1 < array1.length) {
        newArray.push(array1[counter1])
        counter1++
    }

    return newArray
}




function Mergesort(myArray) {
    if (myArray.length <= 1) {
        return myArray;
    }
    let mid = Math.floor(myArray.length/2)
    let left = Mergesort(myArray.slice(0,mid))
    let right = Mergesort(myArray.slice(mid))
    return Merge(left,right)

}

console.log(Mergesort([2,3,4,14,99,100,89838922314,1,1,10,50,111111]))
