const arr = [0, 4, 6, 8, 8, 8, 5, 5, 7];
let obj = {};

const myFunction = () => {
    for (i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) {
            obj[arr[i]] += 1;
        } else {
            obj[arr[i]] = 1;
        }
    }
    for (let key in obj) {
        if (obj[key] >= 2) {
            // console.log(key + " counted " + obj[key]) + " times.";
            let arrIndex = arr.indexOf(parseInt(key));
            // console.log(arrIndex)

            arr.splice(arrIndex, obj[key], obj[key] )
        }
    }


    console.log(obj);
    console.log(arr)
}

myFunction();