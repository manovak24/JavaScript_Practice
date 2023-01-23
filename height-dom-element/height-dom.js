const ctrOneHeight = document.querySelector('.ctr-one').offsetHeight;
const heightDisplay = document.querySelector(`[data-height]`);
const findBtn = document.querySelector('.find');
const clearBtn = document.querySelector('.clear');

findBtn.addEventListener('click', () => {
    heightDisplay.innerText = ctrOneHeight
})

clearBtn.addEventListener('click', () => {
    heightDisplay.innerText = '____'
})