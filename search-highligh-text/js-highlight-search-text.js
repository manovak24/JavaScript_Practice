const submitCtr = document.getElementById('search-ctr');
const submitBtn = document.getElementById('search-btn');
const clearBtn = document.getElementById('clear-btn');
const searchTerm = document.getElementById('text-to-search');
const paragraph = document.querySelectorAll('.paragraph');

let paragraphArr = [];

const search = (e) => {
    e.preventDefault();
    let textToSearch = searchTerm.value.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");
    let pattern = new RegExp(`${textToSearch}`, "gi");
    paragraph.forEach(p => {
        // used to store original paragraph text to replace highlighted text when cleared
        paragraphArr.push(p.innerText);
        // replaces paragraph text with highlighted search term text
        p.innerHTML = p.textContent.replace(pattern, match => `<mark>${match}</mark>`);
    });
    clearBtn.disabled = false;
    // console.log(paragraphArr);
    return;
};

const clearSearch = () => {
    for(let i = 0; i < paragraph.length; i++) {
        paragraph[i].innerText = paragraphArr[i]
    }
    paragraphArr = [];
    searchTerm.value = '';
    clearBtn.disabled = true;
    return;
};

submitCtr.addEventListener('submit', (event) => {
    search(event);
});

submitBtn.addEventListener('click', (event) => {
    search(event);
});

clearBtn.addEventListener('click', () => {
    clearSearch();
});

console.log(paragraph)