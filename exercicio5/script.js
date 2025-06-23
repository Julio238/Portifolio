let aleatorio = parseInt(Math.random () * 101);
let MostraResultado = document.querySelector("#resultado");
let jogador;
let MostraTentativa = document.querySelector("#tentativa");
let tenativas = 0;

function pensar() { 
    jogador = Number(window.prompt("Digite um numero entre 1 e 100"))

        if(jogador> 0 && jogador<101 ){

            tenativas += 1;

    if (jogador !=aleatorio) {


        if (jogador > aleatorio) {
            MostraResultado.innerHTML += `<p>Tentativas ${tenativas}:</p><p>Voce tentou o numero ${jogador}, tente um numero MENOR!</p>`;

        } else { 
            MostraResultado.innerHTML += `<p>Tentativas ${tenativas}:</p><p>Voce tentou o numero ${jogador}, tente um numero MAIOR!</p>`;

        }
    } else {
        MostraResultado.innerHTML += `<p>Parabens! voce acerto o numero ${aleatorio} em ${tenativas} Tentativas</p>`;

    }
        }else {
            alert("voce nao pode digitar numeros maior que 100");
        }
   
}