function contar () {

    let MostraResultado = document.getElementById(`resultado`)

    MostraResultado.innerHTML =`<p><b> Contando de 1 ate 10</b></p>`

    let contador = 1; 
    
    while (contador <= 10) {
        let numero = contador % 2;
 
    if (numero == 0) {
         MostraResultado.innerHTML += `<mark> ${contador} </mark> &#x1F449 `;
    }else{
          MostraResultado.innerHTML += `${contador} &#x1F449 `;
    }
    contador+=1;
}

    MostraResultado.innerHTML += `&#x1F3C1`;
}