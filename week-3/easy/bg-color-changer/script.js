const redBtn = document.querySelector('#red');
const yellowBtn = document.querySelector('#yellow');
const greenBtn = document.querySelector('#green');
const purpleBtn = document.querySelector('#purple');
const orangeBtn = document.querySelector('#orange');
const reset = document.querySelector('#reset');
const body = document.body;

redBtn.addEventListener('click', () => {
    body.style.backgroundColor = 'red'
})
yellowBtn.addEventListener('click', () => {
    body.style.backgroundColor = 'yellow'
})
greenBtn.addEventListener('click', () => {
    body.style.backgroundColor = 'green'
})
purpleBtn.addEventListener('click', () => {
    body.style.backgroundColor = 'purple'
})
orangeBtn.addEventListener('click', () => {
    body.style.backgroundColor = 'orange'
})
reset.addEventListener('click', () => {
    body.style.backgroundColor = 'white'
})