
const button = document.querySelector('.button');

function insert(number) {


    let num = document.querySelector('#resultado').innerHTML;
    document.querySelector('#resultado').innerHTML = num + number;

}

function Clear() {

    document.querySelector('#resultado').innerHTML = ''

}

function back() {

    let result = document.querySelector('#resultado').innerHTML;
    document.querySelector('#resultado').innerHTML = result.substring(0, result.length - 1)

}

function calculate() {

    let result = document.querySelector('#resultado').innerHTML;
    document.querySelector('#resultado').innerHTML = eval(result)

}