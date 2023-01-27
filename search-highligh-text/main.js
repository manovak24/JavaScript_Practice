const submitCtr = document.getElementById('search-ctr');
const submitBtn = document.getElementById('search-btn');
const clearBtn = document.getElementById('clear-btn');
const searchTerm = document.getElementById('text-to-search');
const paragraph = document.getElementById('paragraph');

let paragraphObj = {
    name: 'Original Text',
    text: ''
};

const search = (e) => {
    e.preventDefault();

    paragraphObj.text = paragraph.innerText;

    let textToSearch = searchTerm.value; 
    textToSearch = textToSearch.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");
    let pattern = new RegExp(`${textToSearch}`, "gi");
    paragraph.innerHTML = paragraph.textContent.replace(pattern, match => `<mark>${match}</mark>`);
}

const clearSearch = () => {
    paragraph.innerText = paragraphObj.text;
    searchTerm.value = '';
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