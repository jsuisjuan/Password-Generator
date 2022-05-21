//jshint esversion:6
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));




const randomFunction = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
};

generateElement.addEventListener('click', () => {
    const length = +lengthElement.value;
    const hasLower = lowerCaseElement.checked;
    const hasUpper = upperCaseElement.checked;
    const hasNumber = numberElement.checked;
    const hasSymbol = symbolElement.checked;

    resultElement.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});

// Copy password to clipboard
clipboardElement.addEventListener('click', () => {
    const password = resultElement.innerText;
    if (!password) {
        return;
    }
    navigator.clipboard.writeText(password);
    alert('Password copied to clipboard!');
});

// Generate password function
function generatePassword(lower, upper, number, symbol, length) {
    let generatePassword = '';
    const typesCount = lower + upper + number + symbol;
    const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);

    if (typesCount === 0) {
        return '';
    }

    for (let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            const functionName = Object.keys(type)[0];
            generatePassword += randomFunction[functionName]();
        });
    }

    const finalPassword = generatePassword.slice(0, length);
    return finalPassword;
}

// Generator functions
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.';
    const randomIndex = Math.floor(Math.random() * symbols.length);
    return symbols[randomIndex];
}

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.post('/', function(res, req) {
    const resultElement = req.body.result;
    const lengthElement = req.body.length;
    const upperCaseElement = req.body.uppercase;
    const lowerCaseElement = req.body.lowercase;
    const numberElement = req.body.numbers;
    const symbolElement = req.body.symbols;
    const generateElement = req.body.generate;
    const clipboardElement = req.body.clipboard;
    
});

app.listen(3000, function() {
    console.log('Server is listening on port 3000');
});
