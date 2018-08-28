var mathString = '';
var log = '';
var first = true;


function screen(string) {
    if (first = true) {
        document.getElementById('display').innerHTML = ' ';
        first = false;
    }
    if  (string == 'lb') {
        string = '(';
    } else if (string == 'rb') {
        string = ')';
    }
    mathString += string;
    document.getElementById('display').innerHTML = mathString;
}

function backspace() {
    if (mathString.length == 0) {
        document.getElementById('display').innerHTML = 'Clear';
    }
    else {
        mathString = mathString.slice(0,-1);
        document.getElementById('display').innerHTML = mathString;
    }
}

function remove() {
    mathString = '';
    document.getElementById('display').innerHTML = '0.00';
    first = true;
    return;
}

function calculate() {
    try {
        document.getElementById('display').innerHTML = eval(mathString);
        log += mathString + ': ' + eval(mathString) +'<br>';
        mathString = eval(mathString);
    }
    catch {
        document.getElementById('display').innerHTML = 'Math Error!';
    }
    document.getElementById('log').innerHTML = log;
    return;
}