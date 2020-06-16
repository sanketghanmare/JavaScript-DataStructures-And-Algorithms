function PivotHelper(myArray,start,end) {

    function swap(myArray, i, pivotIndex ) {
        let temp = myArray[i]
        myArray[i] = myArray[pivotIndex]
        myArray[pivotIndex] = temp
    }

    let pivot = myArray[start]
    let pivotIndex = start;

    for (let i = start + 1; i < arr.length; i++) {
        if (pivot > myArray[i]) {
            pivotIndex++;
            swap(myArray, pivotIndex,i )
        }

    }

    swap(myArray, start, pivotIndex)
    return pivotIndex;
}


function QuickSort(arr,left,right) {
    if (left < right) {
        let pivotIndex = PivotHelper(arr,left,right);
        QuickSort(arr,left,pivotIndex-1)
        QuickSort(arr,pivotIndex+1,right)
    }
    return arr;
}
let arr = [10,4,3,7,2,9,1,8];

console.log(QuickSort(arr,0,arr.length-1 ));
