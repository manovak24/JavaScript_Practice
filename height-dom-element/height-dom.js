const ctrOne = document.querySelector('.ctr-one');
const heightDisplay = document.querySelector(`[data-height]`);
const widthtDisplay = document.querySelector(`[data-width]`);
const changingHeightDisplay = document.querySelector(`[data-changing-height]`);
const changingWidthDisplay = document.querySelector(`[data-changing-width]`);
const findBtn = document.querySelector('.find');
const clearBtn = document.querySelector('.clear');

findBtn.addEventListener('click', () => {
    heightDisplay.innerText = ctrOne.offsetHeight;
    widthtDisplay.innerText = ctrOne.offsetWidth;
})

clearBtn.addEventListener('click', () => {
    heightDisplay.innerText = '___';
    widthtDisplay.innerText = '___';
})

function findHeight() {
    changingHeightDisplay.innerText = ctrOne.offsetHeight;
}
findHeight();

function findWidth() {
    changingWidthDisplay.innerText = ctrOne.offsetWidth;
}
findWidth();

new ResizeObserver(() => {
    findHeight();
    findWidth();
}).observe(ctrOne)