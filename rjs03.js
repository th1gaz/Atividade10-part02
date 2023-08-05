let text_sal, text_aumt, text_nvsal, novo_sal, aumen;
let sal = parseInt(prompt('Digite seu salario atual'))

function aumento(a, b) {
    return (a * b)/100
}
function sal_final(a, b) {
    return ((a * b)/100) + a
}

if (sal<=280) {
    const aumen = aumento(sal, 20);
    const novo_sal = sal_final(sal, 20)
    
    text_sal = `Seu salario era de ${sal} reais e sofreu reajuste de 20%`
    text_aumt = `Teve um aumento de ${aumen} reais`
    text_nvsal = `Agora seu salario é de ${novo_sal} reais`
    document.write(text_sal)
    document.write('<br>')
    document.write(text_aumt)
    document.write('<br>')
    document.write(text_nvsal)
}

if (sal>280 && sal<=700) {
    const aumen = aumento(sal, 15);
    const novo_sal = sal_final(sal, 15)
    
    text_sal = `Seu salario era de ${sal} reais e sofreu reajuste de 15%`
    text_aumt = `Teve um aumento de ${aumen} reais`
    text_nvsal = `Agora seu salario é de ${novo_sal} reais`
    document.write(text_sal)
    document.write('<br>')
    document.write(text_aumt)
    document.write('<br>')
    document.write(text_nvsal)
}

if (sal>700 && sal<=1500) {
    const aumen = aumento(sal, 10);
    const novo_sal = sal_final(sal, 10)
    
    text_sal = `Seu salario era de ${sal} reais e sofreu reajuste de 10%`
    text_aumt = `Teve um aumento de ${aumen} reais`
    text_nvsal = `Agora seu salario é de ${novo_sal} reais`
    document.write(text_sal)
    document.write('<br>')
    document.write(text_aumt)
    document.write('<br>')
    document.write(text_nvsal)
}

if (sal>=1500) {
    const aumen = aumento(sal, 5);
    const novo_sal = sal_final(sal, 5)
    
    text_sal = `Seu salario era de ${sal} reais e sofreu reajuste de 5%`
    text_aumt = `Teve um aumento de ${aumen} reais`
    text_nvsal = `Agora seu salario é de ${novo_sal} reais`
    document.write(text_sal)
    document.write('<br>')
    document.write(text_aumt)
    document.write('<br>')
    document.write(text_nvsal)
}