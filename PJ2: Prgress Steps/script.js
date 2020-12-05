const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.getElementById('.circle');

let currentActive = 0;
let newWidth = 0;

next.addEventListener('click', () => {
    currentActive++;
    newWidth  += 33;
    progress.style.width = newWidth + "%";
    circles[currentActive].classList.add('active')
    prev.removeAttribute('disabled');
    if(currentActive = 3) {
        next.setAttribute('disabled', '');
    }
})

prev.addEventListener('click', () => {
    newWidth -= 33;
    progress.style.width = newWidth + "%";
    circles[currentActive].classList.remove('active')
    currentActive--;
    if (currentActive == 0) {
        prev.setAttribute('disabled', '');
    }
    next.removeAttribute('disabled');
})