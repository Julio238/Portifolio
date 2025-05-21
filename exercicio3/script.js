//calculadoa simples com as 5 operações baica:
//adição, subitração, multiplicação, divição.
let num1;
let num2;
let resultado
function sobra() {
    num1 = Number(window.prompt('Digite um numero:'));
    num2 = Number(window.prompt('Digite outro numero:'));

    resultado = num1 % num2;
    numero = resultado % 2;

    alert("O resultado é " + resultado + ".");
    if (numero == 0) {
        alert ("Par");
    }else {
        alert ("impar")
    }    
}
function multiplicacao() {
    num1 = Number(window.prompt('Digite um numero:'));
    num2 = Number(window.prompt('Digite outro numero:'));

    resultado = num1 * num2;
     numero = resultado % 2;
    
    alert("O resultado é " + resultado + ".");
    if (numero == 0) {
        alert ("Par");
    }else {
        alert ("impar")
    }    
}
function adicao() {
    num1 = Number(window.prompt('Digite um numero:'));
    num2 = Number(window.prompt('Digite outro numero:'));

    resultado = num1 + num2;
     numero = resultado % 2;
    
    alert("O resultado é " + resultado + ".");
    if (numero == 0) {
        alert ("Par");
    }else {
        alert ("impar")
    }    
}
function subitracao() {
    num1 = Number(window.prompt('Digite um numero:'));
    num2 = Number(window.prompt('Digite outro numero:'));

    resultado = num1 - num2;
     numero = resultado % 2;
    
    alert("O resultado é " + resultado + ".");
    if (numero == 0) {
        alert ("Par");
    }else {
        alert ("impar")
    }    
}
function divisao() {
    num1 = Number(window.prompt('Digite um numero:'));
    num2 = Number(window.prompt('Digite outro numero:'));

    resultado = num1 / num2;
     numero = resultado % 2;
    
    alert("O resultado é " + resultado + ".");
    if (numero == 0) {
        alert ("Par");
    }else {
        alert ("impar")
    }    
}