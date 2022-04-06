//event listeners

//query selectors work the same as css selectors (advanced and psudo classed) ex - button .button #button AND this will only select this first on from the page
//if first button is removed from HTML file this will select the button that was created in the dom-practice script.
const button = document.querySelector('button');
const paragraphs = document.querySelectorAll('p');
const containers = document.querySelector('.container');

button.addEventListener('click', function() {
    console.log('clicked');
    for (let p of paragraphs) {
        p.style.color = 'orange';
    }
    containers.style.backgroundColor = 'black';
})
