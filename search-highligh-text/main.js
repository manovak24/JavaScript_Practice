const submitCtr = document.getElementById('search-ctr');
const submitBtn = document.getElementById('search-btn');
const clearBtn = document.getElementById('clear-btn');
const searchTerm = document.getElementById('text-to-search');
const paragraph = document.querySelectorAll('.paragraph');

let paragraphObj = {
    // text: ''
};

const search = (e) => {
    e.preventDefault();
    // paragraphObj.text = paragraph.innerText;

    for(let i = 0; i < paragraph.length; i++) {
        paragraphObj[`text${[i]}`] = paragraph[i].innerText;
    }

    let textToSearch = searchTerm.value; 
    textToSearch = textToSearch.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");
    let pattern = new RegExp(`${textToSearch}`, "gi");

    paragraph.forEach(p => {
        p.innerHTML = p.textContent.replace(pattern, match => `<mark>${match}</mark>`);
    })

    console.log(paragraphObj)
}

const clearSearch = () => {
    for(let i = 0; i < paragraph.length; i++) {
        paragraph[i].innerText = paragraphObj.text[i]
    }
    
    // paragraph.forEach(p => {
    //     p.innerText = paragraphObj.text;
    // })
    // paragraph.innerText = paragraphObj.text;
}

submitCtr.addEventListener('submit', (event) => {
    search(event);
})

submitBtn.addEventListener('click', (event) => {
    search(event);
    // console.log(paragraphObj, "object");
    // console.log(`THIS IS THE TEXT ${paragraphObj.text}`);

})

clearBtn.addEventListener('click', () => {
    clearSearch();
})

console.log(paragraph)