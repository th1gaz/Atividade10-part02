function verificaTriangulo(ladoA, ladoB, ladoC){
	if((ladoA + ladoB > ladoC) && (ladoA + ladoC > ladoB) && (ladoB + ladoC > ladoA)){
		return true;
	}

	return false;

}

function verificaTipoTriangulo(ladoA, ladoB, ladoC, ehTriangulo){
	if (ehTriangulo == false) {
		return "Não é possível formar um triângulo com esses valores"
	}

	else if(ladoA == ladoB && ladoA == ladoC && ladoB == ladoC){
		return "Triângulo Equilátero"
	}

	else if((ladoA == ladoB && ladoA != ladoC) || (ladoA == ladoC && ladoA != ladoB) || (ladoB == ladoC && ladoB != ladoA)){
		return "Triângulo Isósceles"
	}

	else{
		return "Triângulo Escaleno"
	}
}

// === CÓDIGO CHAMANDO AS FUNÇÕES ===

let lado1 = parseInt(prompt("Digite o primeiro lado do triangulo"))
let lado2 = parseInt(prompt("Digite o segundo lado do triangulo"))
let lado3 = parseInt(prompt("Digite o terceiro lado do triangulo"))


let ehTriangulo = verificaTriangulo(lado1, lado2, lado3);


let tipoTriangulo = verificaTipoTriangulo(lado1, lado2, lado3, ehTriangulo)
document.write(tipoTriangulo)