function numberToString(num) {
    return num.toString()
}
console.log(numberToString(854))


function removeChar(str) {
    return str.slice(1, -1)
}
console.log(removeChar('eloquent'))


function bmi(w, h) {
    let hSq = h * h;
    if(w/hSq <= 18.5) {
        return "Underweight"
    } else if (w/hSq <= 25.0) {
        return "Normal"
    } else if (w/hSq <= 30) {
        return "Overweight"
    } else if (w/hSq > 30) {
        return "Obese"
    }
}

console.log(bmi(80, 1.80))