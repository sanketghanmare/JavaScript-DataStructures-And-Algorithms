function Selectionsort(myArray) {
    for (let i = 0; i < myArray.length; i++) {
        let minIndex = i;
        for (let j = i+1; j < myArray.length; j++) {
            if (myArray[j] < myArray[minIndex]) {
                minIndex = j
            }
        }
           if (i !== minIndex) {
               let temp = myArray[minIndex];
               myArray[minIndex] = myArray[i]
               myArray[i] = temp;
           }
    }

    return myArray
}

console.log(Selectionsort([3,5,2,65,7,1,6,0]))
