const left = document.querySelctor('.left');
const right = document.querySelector('.right')
const contianer = document.querySelector('.container')

left.addEventListener('mouseenter', () => contianer.classList.add('hover-left'))