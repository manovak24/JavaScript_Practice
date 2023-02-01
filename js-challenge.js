const arr = [0, 4, 6, 8, 8, 8, 5, 5, 7];

const myFunction = (ar) => {
    for (i = 0; i <= ar.length; i++) {
        // if(arr[i] === (arr[i+1])) {
        //     console.log('this worked')
        // }
        console.log(arr[i+1])
    }
}

myFunction(arr);