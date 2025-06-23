let MostraResultado = document.querySelector("#resultado");
let num1
let num2
let dife = num1 - num2 

function diferenca(){
    num1 = Number(window.prompt('Digite um numero:'));
    num2 = Number(window.prompt('Digite outro número:'));
    if (num1 < num2){
        MostraResultado.innerHTML += `<p>o numero maior é ${num2}</p>`;
       

    

    }
    else {
        MostraResultado.innerHTML += `<p>o numero maior é ${num1}</p>`;

    


    }

   
}