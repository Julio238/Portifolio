// função que vai calcular os valores
function subtrair() {

     //declaração de variavel
    let idade = 0;

     //entrada de dados pelo usuario e atribuir a variavel
   idade = Number(window.prompt('Digite seu ano de nascimento:'));

     //verificar se a idade é maior ou menor que 18 e falar para o usuario 
   if(idade < 2008) {
        alert("Você ja pode tirar a Habilitação");
   } else {
        let resul = idade - 2007
        alert("Você ainda não pode tirar a Habilitação Você ainda precisa esperar essa idade: " + resul + " Anos");
     
   }
}