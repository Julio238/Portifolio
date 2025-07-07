function aleatorio() {
    let MostraResultado = document.querySelector("#resultado");
    let num = Number(window.prompt("Digite um numero "))
    let zero 
    let med 
 
        if (num > 0) {
           zero += num 
         MostraResultado.innerHTML += ` digite outro numero  `;
        }else{
          MostraResultado.innerHTML += `<p>A soma dos numeros deu: ${zero} </p><p> e a media e:${med}</p>`;
 
        }

}
