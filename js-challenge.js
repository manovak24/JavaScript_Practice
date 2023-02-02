const arr = [0, 4, 6, 8, 8, 8, 5, 5, 7];

const myFunction = () => {
    for (i = 0; i < arr.length; i++) {
        // console.log(arr[i])
        if(arr[i] === arr[i + 1] && arr[i + 1] === arr[i + 2]) {
            const index = arr.indexOf(arr[i]);
            // console.log(arr[i] + "arr i")
            // console.log(index)
            arr.splice(3, index);
        }
            
    }    
    console.log(arr)
}

myFunction();