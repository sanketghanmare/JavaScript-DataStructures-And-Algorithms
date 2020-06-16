function NaiveStringSearch(str, pattern) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        let comp = pattern
        let charCounter = 0;
        let j = i;
        for (let x = 0; x < comp.length; x++) {

            if (str.charAt(j) === comp.charAt(x)) {
                j++;
                charCounter++;
                if (charCounter === comp.length) {
                    count++;
                }
            }
        }
    }

    return count;
}

console.log(NaiveStringSearch("wikipedia is a multilingual online encyclopedia created " +
    "and maintained as an open collaboration project by a community " +
    "of volunteer editors using a wiki-based editing system. " +
    "It is the largest and most popular general reference work on the World Wide Web.", "ope"))
