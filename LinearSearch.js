function linearSearch(myArray, value){
    if (myArray.length === 0) {
        return -1;
    }

    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i] === value) {
            return i;
        }
    }

    return -1;
}

console.log(linearSearch([1,2,3,4,5,6,7,8,15,0,11], 15))
