//Codifique ao menos três funções cujas instruções permitam resolver um problema particular, segmentado em tarefas. 

//1 - Função que soma dois números
function somar(primeiroNumero, segundoNumero) {
    return primeiroNumero + segundoNumero;
}

function mostrar(mensagem) {
    console.log(mensagem);
    alert(mensagem); 

const num1 = parseFloat(prompt("Digite o primeiro número:"));
const num2 = parseFloat(prompt("Digite o segundo número:"));

const resultado = somar(num1, num2);
mostrar("O resultado da soma é: " + resultado);

}
//2 - Converte em letra maiuscula
/*function converterParaMaiusculas(texto) {
    return texto.toUpperCase();
}

const texto = prompt("Digite um texto para converter em maiúsculas:");

const resultado = converterParaMaiusculas(texto);
console.log("Texto em maiúsculas:", resultado); 
alert("Texto em maiúsculas: " + resultado); */


//3 -  Calcular o Quadrado de um Número
/*function calcularQuadrado(numero) {
    return numero * numero;
}

const numero = parseFloat(prompt("Digite um número para calcular o quadrado:"));

const resultado = calcularQuadrado(numero);
console.log("O quadrado de " + numero + " é: " + resultado); 
alert("O quadrado de " + numero + " é: " + resultado);*/