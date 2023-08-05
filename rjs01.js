function banco(a, b) {
    return a - b;
}
function calcSaldo(a, b) {
    return a - b;
}

let saldo = parseInt(prompt('Digite seu saldo bancario'))
let compra = parseInt(prompt('Digite o valor da sua compra'))

const x = banco(saldo, compra)

if (x<0) {
    alert('Você não tem saldo suficiente para realizar essa compra')
}else{
    const y = calcSaldo(saldo, compra)
    let text_sal = `Seu saldo atual é de ${y} reais`
    alert('Compra realizada com sucesso')
    alert(text_sal)
}