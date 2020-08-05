function sortedFrequency(arr, number){
    // add whatever parameters you deem necessary - good luck!req=
    let freq = -1;
    if(arr.includes(number)) {
        arr.forEach(function(x) {
            if(x === number && freq === -1) {
                freq = 1;
            } else if (x === number){
                freq += 1;
            }
        })
    }

    return freq;
}

console.log(sortedFrequency([1,1,1,1,1,1,1,3,5,7,3],1))
