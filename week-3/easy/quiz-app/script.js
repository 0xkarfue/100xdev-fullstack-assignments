// const { quizData } = require("./data.js");


import { quizData } from './data.js';

    const question = document.querySelector('.question');
    const h1 = document.querySelector('h1');
    const test = document.querySelector('#test');

    // test.addEventListener('click', () => {
      h1.textContent = quizData[1].question;  // Use textContent to change the text of <h1>
    // });