var mathString = '';
var first = false;

function screen(string) {
    if (first = false) {
        document.getElementById('display').innerHTML = ' ';
        first = true;
    }
    if  (string == 'lb') {
        string = '(';
    } else if (string == 'rb') {
        string = ')';
    }
    mathString += string;
    document.getElementById('display').innerHTML = mathString;
}

function remove() {
    mathString = '';
    document.getElementById('display').innerHTML = '0.00';
    first = false;
    return;
}

function calculate() {
    try {
        document.getElementById('display').innerHTML = eval(mathString);
    }
    catch {
        document.getElementById('display').innerHTML = 'Math Error!';
    }
    return;
}