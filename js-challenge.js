const arr = [0, 4, 6, 8, 2, 9, 8, 4, 6];
// [0, 4, 6, 8, 8, 8, 5, 5, 7];
let obj = {};
let answer;

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
            let arrIndexMultiple = arr.indexOf(parseInt(key));
            // console.log(arrIndex)

            arr.splice(arrIndexMultiple, obj[key], obj[key] )
        }

        if (obj[key] === 1) {
            let arrIndexSingle = arr.indexOf(parseInt(key));
            arr.splice(arrIndexSingle, obj[key], obj[key]);
        }
    }
    console.log(arr)

    if(arr.length === 1) {
        answer = arr[0]
        console.log(answer)
    }
    
}

myFunction();
myFunction();
myFunction();
