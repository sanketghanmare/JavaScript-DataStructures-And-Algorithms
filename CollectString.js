function collectstring(obj) {
const key = Object.keys(obj)
    const arr = [];
    for (const key of Object.keys(obj)) {
        const cal = obj[key]
        if (typeof cal === "string") {
            arr.push(cal)
        } else if(cal instanceof Object && Object.keys(cal).length > 0) {
            collectstring(cal)
        } else {

        }
    }

    return arr
}

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectstring(obj));

