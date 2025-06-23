function media() {
    let nota1 = Number(window.prompt("Digite a primeira nota"))
    let nota2 = Number(window.prompt("Digite a segunda nota"))
    let nota3 = Number(window.prompt("Digite a terceira nota"))
    
        let media = (nota1 + nota2 + nota3) / 3 ;
        

    let resultado = document.querySelector('#resultado');

    if(media >= 60) {
        
    resultado.innerHTML = `<p><h2>Você já esta na media ${media} </h2></p>`

    
   } else {
        let sobra = 60 - media

    resultado.innerHTML = `<p><h2>Você não esta na media você tem: ${media}  ainda falta: ${sobra} </h2></p>`

    
   }


}