function Insertionsort(myArray) {
    for (let i = 0; i < myArray.length; i++) {
      for (let j = 0; j < i; j++) {
          if (myArray[j] > myArray[i]) {
              console.log(i,j,myArray[i],myArray[j])
              let temp = myArray[i]
              myArray[i] = myArray[j]
              myArray[j] = temp
              console.log(myArray,'\n')
          }
      }

    }

    return myArray
}

console.log(Insertionsort([8,1,0,5,3,2,4]))
