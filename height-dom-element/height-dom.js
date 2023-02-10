const ctrOne = document.querySelector('.ctr-one');
const heightDisplay = document.querySelector(`[data-height]`);
const widthtDisplay = document.querySelector(`[data-width]`);
const changingHeightDisplay = document.querySelector(`[data-changing-height]`);
const changingWidthDisplay = document.querySelector(`[data-changing-width]`);
const autoAdjustCtr = document.querySelector('.auto-adjust-ctr');
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

function setPaddingTop() {
    autoAdjustCtr.style.paddingTop = `${ctrOne.offsetWidth  / 10}px`;
    autoAdjustCtr.style.paddingBottom = `${ctrOne.offsetWidth  / 10}px`;

}

new ResizeObserver(() => {
    findHeight();
    findWidth();
    setPaddingTop();
}).observe(ctrOne)