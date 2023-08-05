function datadNasc(a, b) {
    return a - b;
}

let ano_atual = 2023
let nome = prompt('Digite seu nome')
let ano_nasc = prompt('Digite o ano em que você nasceu')

const x = datadNasc(ano_atual, ano_nasc)
const text = `Olá, seu nome é ${nome} e você tem ${x} anos :)`

document.write(text)