function aleatorio() {
    let MostraResultado = document.querySelector("#resultado");
    let num = Number(window.prompt("Digite um numero "));
    let zero = 0;
    let med ;

        if (num > 0) {
        
        
          MostraResultado.innerHTML += ` digite outro numero  `;
        }else{
          num++;
          zero += num++;
          MostraResultado.innerHTML += `<p>A soma dos numeros deu: ${zero} </p><p> e a media e:${med}</p>`;
 
        }

}
