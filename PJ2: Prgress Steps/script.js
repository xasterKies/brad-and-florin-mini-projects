const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.getElementById('.circle');

let currentActive = 1;

next.addEventListener('click', () => {
    currentActive++

    bar = progress.style.width.valueOf();

    switch (bar) {
        case currentActive = 2 :
            bar = '32%';
            break;
        case currentActive = 3 :
            bar = '64%';
            break;
        case currentActive = 4:
            bar = '96%'
            break;
        default:
            bar = '0%'
    }
}