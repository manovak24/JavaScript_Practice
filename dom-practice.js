const myFirstHeader = document.getElementsByTagName('h1')[0];
const mySecondHeader = document.getElementsByTagName('h1')[1];

console.log(myFirstHeader.style.color);
console.log(mySecondHeader.style.color);

setInterval(function() {
    if(myFirstHeader.style.color === 'green') {
        myFirstHeader.style.color = 'purple'
    } else {
        myFirstHeader.style.color = 'green'
    }
}, 2000)

//Create HTML element and append to HTML body
const myButton = document.createElement('button');
document.body.appendChild(myButton);
myButton.textContent = 'Click Me';
myButton.classList.add('my-button');
myButton.style.backgroundColor = 'black';
myButton.style.color = 'white';

//Create HTML element and append to specific container
const newP = document.createElement('p');
const container = document.getElementsByClassName('container')[0];
newP.textContent = 'This is a dynamic paragraph created using the DOM and JS';
container.appendChild(newP);

//Create element from JSON
const containerTwo = document.getElementsByClassName('container')[1];
const response = {
    body: [
        'This is an object that represents our HTML 1:1',
        'It\'s where JavaScript, HTML, and CSS come together'
    ]
}

for(let i = 0; i < response.body.length; i++) {
    const myParagraph = document.createElement('p');
    myParagraph.textContent = response.body[i];  
    containerTwo.appendChild(myParagraph);
}