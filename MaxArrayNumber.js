function maxArrayNumber(arr) {
    let maxNumber = -Infinity;
    arr.forEach(function (a) {
        if (maxNumber < a) {
            maxNumber = a;
        }
    })
    return maxNumber;
}

console.log(maxArrayNumber([1,5,6,7,8,1000,-100000]))
console.log(maxArrayNumber(["a","b","c","z"]))

let ob = {
    friends : [
        {name: "malfoy"},
        {name: "crabbe"},
        {name: "goyle"}
    ],
    color: "Blue",
    isGood: true
}

console.log(ob.friends[0].name)

let movie = [
    {title: "Barges", rating: 5, hasWatched: true},
    {title: "lone star", rating: 5, hasWatched: true},
    {title: "Night hill", rating: 4.5, hasWatched: true},
    {title: "Evening", rating: 4.5, hasWatched: false}
]

// for (let i of movie) {
//     if (i.hasWatched) {
//         console.log("you have watched " + i.title + " having stars - " + i.rating)
//     }
// }
// for (let i = 0; i < movie.length; i++) {
//     if (movie[i].hasWatched) {
//         console.log("you have watched " + movie[i].title + " having stars - " + movie[i].rating)
//     }
//
// }

movie.forEach(function (movie) {
   if (movie.hasWatched === true) {
       console.log("you have watched " + movie.title + " having stars - " + movie.rating)
   }
})

