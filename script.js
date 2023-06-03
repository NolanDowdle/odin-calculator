/* initialize container */
const container = document.querySelector('#container');
container.setAttribute('style', 'display: flex; flex-direction: column; flex: 1 1 content; height: 100vh; align-items: center; justify-content: center;')

const calculator = document.querySelector('#calculator');

const display = document.querySelector('#p1');

const button0 = document.querySelector('#button0');
const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');
const button4 = document.querySelector('#button4');
const button5 = document.querySelector('#button5');
const button6 = document.querySelector('#button6');
const button7 = document.querySelector('#button7');
const button8 = document.querySelector('#button8');
const button9 = document.querySelector('#button9');
const buttonAdd = document.querySelector('#buttonAdd');
const buttonMultiply = document.querySelector('#buttonMultiply');
const buttonMinus = document.querySelector('#buttonMinus');
const buttonDivide = document.querySelector('#buttonDivide');
const buttonClear = document.querySelector('#clear');
const buttonDelete = document.querySelector('#delete');
const buttonDecimal = document.querySelector('#buttonDecimal');
const buttonEquals = document.querySelector('#buttonEquals');

let globalText = "";

button0.addEventListener('click', () => {
    globalText = globalText + "0";
    display.innerHTML = globalText;
});

button1.addEventListener('click', () => {
    globalText = globalText + "1";
    display.innerHTML = globalText;
});

button2.addEventListener('click', () => {
    globalText = globalText + "2";
    display.innerHTML = globalText;
});

button3.addEventListener('click', () => {
    globalText = globalText + "3";
    display.innerHTML = globalText;
    console.log(globalText);
});

button4.addEventListener('click', () => {
    globalText = globalText + "4";
    display.innerHTML = globalText;
});

button5.addEventListener('click', () => {
    globalText = globalText + "5";
    display.innerHTML = globalText;
});

button6.addEventListener('click', () => {
    globalText = globalText + "6";
    display.innerHTML = globalText;
});

button7.addEventListener('click', () => {
    globalText = globalText + "7";
    display.innerHTML = globalText;
});

button8.addEventListener('click', () => {
    globalText = globalText + "8";
    display.innerHTML = globalText;
});

button9.addEventListener('click', () => {
    globalText = globalText + "9";
    display.innerHTML = globalText;
});

buttonAdd.addEventListener('click', () => {
    globalText = globalText + " + ";
    display.innerHTML = globalText;
});

buttonMinus.addEventListener('click', () => {
    globalText = globalText + " - ";
    display.innerHTML = globalText;
});

buttonMultiply.addEventListener('click', () => {
    globalText = globalText + " * ";
    display.innerHTML = globalText;
});

buttonDivide.addEventListener('click', () => {
    globalText = globalText + " / ";
    display.innerHTML = globalText;
});

buttonDecimal.addEventListener('click', () => {
    // need to check if the string has a decimal yet in the current
    // number, we cannot have 2 decimal in 1 number but can have in other number
    globalText = globalText + ".";
    display.innerHTML = globalText;
});

buttonEquals.addEventListener('click', () => {

});

buttonClear.addEventListener('click', () => {
    globalText = "";
    display.innerHTML = globalText;
});

buttonDelete.addEventListener('click', () => {
    globalText = globalText.slice(0, globalText.length - 1);
    display.innerHTML = globalText;
});