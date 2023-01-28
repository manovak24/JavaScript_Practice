const submitCtr = document.getElementById('search-ctr');
const submitBtn = document.getElementById('search-btn');
const clearBtn = document.getElementById('clear-btn');
const searchTerm = document.getElementById('text-to-search');
const paragraph = document.querySelectorAll('.paragraph');

// let paragraphObj = {
//     // text: ''
// };

let paragraphArr = [];

const search = (e) => {
    e.preventDefault();
    // paragraphObj.text = paragraph.innerText;

    paragraph.forEach(p => {
        paragraphArr.push(p.innerText);
    })

    let textToSearch = searchTerm.value; 
    textToSearch = textToSearch.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");
    let pattern = new RegExp(`${textToSearch}`, "gi");

    paragraph.forEach(p => {
        p.innerHTML = p.textContent.replace(pattern, match => `<mark>${match}</mark>`);
    })

    clearBtn.disabled = false;

    // console.log(paragraphObj)
    console.log(paragraphArr)
}

const clearSearch = () => {
    for(let i = 0; i < paragraph.length; i++) {
        paragraph[i].innerText = paragraphArr[i]
    }

    paragraphArr = [];
    searchTerm.value = '';
    // paragraph.innerText = paragraphObj.text;
    clearBtn.disabled = true;
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