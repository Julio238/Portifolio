let inscritos = 0;
let MostraResultado = document.querySelector("#resultado");
let equipes = 0;

function inscrever() {

    inscritos++;
    equipes = parseInt(inscritos / 3)

    MostraResultado.innerHTML =`<p> Numero de inscritos: ${inscritos}.</p> <p>Numeros de equipes: ${equipes}`;

    if(equipes>= 4 ){
 
            alert("O campionato ja pode acondecer ");
        }
    
}
