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
    for (let prop in obj) {
        if (obj[prop] >= 2) {
            console.log(prop + " counted " + obj[prop]) + " times.";
        }
    }
    console.log(obj);
}

myFunction();