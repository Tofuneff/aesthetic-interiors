let runninngTotal = 0;
let buffer = "0";
let previousOperater;

const screen = document.querySelector('.screen');

function buttonClick(value) {
    if (isNaN(value)) {
        handleSymbol(value);
    } else {
        handleNumber(value);
    }
    screen.innerText = buffer;
}

function handleSymbol(symbol) {
    switch (symbol) {
        case 'C':
            buffer = '0';
            runninngTotal = 0;
            break;
        case '=':
            if (previousOperater === null) {
                return;
            }
            flushOperation(parseInt(buffer));
            previousOperater = null;
            buffer = runninngTotal;
            runninngTotal = 0;
            break;
        case '←':
            if (buffer.length === 1) {
                buffer = '0';
                runninngTotal = 0;
            } else {
                buffer = buffer.substring(0, buffer.length - 1);
            }
            break;
        case '%':
        case '+':
        case '−':
        case '×':
        case '÷':
            handleMath(symbol);
            break;
    }
}

function handleMath(symbol) {
    if (buffer === '0') {
        return;
    }

    const intBuffer = parseInt(buffer);

    if (runninngTotal === 0) {
        runninngTotal = intBuffer;
        buffer = '0';
    } else {
        flushOperation(intBuffer);
    }
    previousOperater = symbol;
}

function flushOperation(intBuffer) {
    if (previousOperater === '+') {
        runninngTotal += intBuffer;
    } else if (previousOperater === '−') {
        runninngTotal -= intBuffer;
    } else if (previousOperater === '×') {
        runninngTotal *= intBuffer;
    } else if (previousOperater === '÷') {
        runninngTotal /= intBuffer;
    } else if (previousOperater === '%') {
        (intBuffer / 100) * 100;
    }
}

function handleNumber(numberString) {
    if (buffer === "0") {
        buffer = numberString;
    } else {
        buffer += numberString;
    }
}

function init() {
    document.querySelector('.calc-buttons').addEventListener('click', function(event) {
        buttonClick(event.target.innerText);
    });
}

init();