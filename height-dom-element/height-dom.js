const ctrOneHeight = document.querySelector('.ctr-one').offsetHeight;
const heightDisplay = document.querySelector('#height');
const findBtn = document.querySelector('.find');
const clearBtn = document.querySelector('.clear');

findBtn.addEventListener('click', () => {
    heightDisplay.innerText = ctrOneHeight
})

clearBtn.addEventListener('click', () => {
    heightDisplay.innerText = '____'
})