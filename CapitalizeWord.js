// function capitalizeFirst (oldArr) {
//     const newArr = [];
//     for(let i = 0; i < oldArr.length; i++){
//         let str = oldArr[i];
//             str = str.toUpperCase()
//             newArr.push(str)
//     }
//     return newArr;
// }

// function capitalizeWords (oldArr) {
//     let value = oldArr[0];
//     let newArray = [];
//     if (value === value.toUpperCase()) {
//         newArray = [...oldArr]
//     } else {
//         oldArr.push(value.toUpperCase())
//         capitalizeWords(oldArr.slice(1))
//     }
//     return newArray
// }
function capitalizeWords (array) {
    if (array.length === 1) {
        return [array[0].toUpperCase()];
    }
    let res = capitalizeWords(array.slice(0, -1));
    res.push(array.slice(array.length-1)[0].toUpperCase());
    return res;

}

const x = capitalizeWords(['car','taco','banana'])
console.log(x)
