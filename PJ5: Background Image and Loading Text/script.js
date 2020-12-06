const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0;

let int = setInterval(blurring, 30)

function blurring() {
    load++

    console.log(load);
}