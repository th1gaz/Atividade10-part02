let nmr1 = parseInt(prompt('Digite um número'))
let operc = prompt('Digite a operação')
let nmr2 = parseInt(prompt('Digite outro número'))
let x;

function mais(a, b) {
    return a + b;
}
function menos(a, b) {
    return a - b;
}
function vezes(a, b) {
    return a * b;
}
function divs(a, b) {
    return a / b;
}


if (operc == '+') {
    x = mais(nmr1, nmr2)
    alert(x)
}

if (operc == '-') {
    const x = menos(nmr1, nmr2)
    alert(x)
}

if (operc == "*") {
    const x = vezes(nmr1, nmr2)
    alert(x)
}

if (operc == '/') {
    const x = divs(nmr1, nmr2)
    alert(x)
}
