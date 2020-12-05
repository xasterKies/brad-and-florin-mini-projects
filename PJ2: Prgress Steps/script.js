const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.getElementById('.circle');

let currentActive = 1;

next.addEventListener('click', () => {
    currentActive++
    newWidth  += 33;
    progress.style.width = newWidth + "%";
    circles[currentActive].classList.add('active')
    prev.removeAttribute('disabled', '');
})

prev.addEventListener