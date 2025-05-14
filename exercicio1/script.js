// função que vai somar os valores
function somar () {
    //declaração de variavel 
    let num1 = 0;
    let num2 = 0;

    //entrada de dados pelo usuario e atribuir a variavel
    num1 = Number(window.prompt('Digite um numero:'));
    num2 = Number(window.prompt('Digite outro numero:'));
    
    //soma das variaveis 
    let soma = num1 + num2;

    //mostrar o resultado pro usuario 
    alert(soma);
    
    //verificar se o resultado da soma é maior ou menor que 10 e falar para o usuario 
    if(soma > 10) {
        alert("O Resultado é maior do que 10");
    } else {
        alert("O Resultado não é maior que 10");
    }
}