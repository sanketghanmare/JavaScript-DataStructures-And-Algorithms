function BubbleSort(myArray) {
    let noSwaps;
    for (let i = myArray.length-1; i >= 0; i--) {
        noSwaps = true;
        for (let j = 0; j <= i-1; j++) {
            if (myArray[j] > myArray[j+1]) {
                let temp = myArray[j];
                myArray[j] = myArray[j+1]
                myArray[j+1] = temp;
                noSwaps = false;
            }
        }
        if (noSwaps) {
            break;
        }
    }
    return myArray;

}

console.log(BubbleSort([2,18,4,5,1,0]));
