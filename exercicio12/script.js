function calcular(){
    let num1
    let contador = 0
    let MostraResultado = document.getElementById(`resultado`)
    num1 = Number(window.prompt('Digite um numero:'))
    
    while (contador <= num1*10) {
     
    MostraResultado.innerHTML += `<p>${contador}</P> `;
        contador += num1
   
}
MostraResultado.innerHTML += `&#x1F3C1`;
}