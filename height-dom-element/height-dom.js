const ctrOne = document.querySelector('.ctr-one');
const heightDisplay = document.querySelector(`[data-height]`);
const changingHeightDisplay = document.querySelector(`[data-changing-height]`);
const findBtn = document.querySelector('.find');
const clearBtn = document.querySelector('.clear');

findBtn.addEventListener('click', () => {
    heightDisplay.innerText = ctrOne.offsetHeight;
})

clearBtn.addEventListener('click', () => {
    heightDisplay.innerText = '____'
})

function findHeight() {
    changingHeightDisplay.innerText = ctrOne.offsetHeight;
}

findHeight();

new ResizeObserver(findHeight).observe(ctrOne)