window.onload = function(){

    const button = document.getElementById('add-button');
    const stylePag = document.getElementById('corPagina');
    let campoEscrita = document.getElementById('pesquisa')
    campoEscrita.addEventListener("change", function(){
    document.getElementById("corPagina").style.backgroundColor = campoEscrita.value

    localStorage.setItem("mudaCorDeFundo", campoEscrita.value)
    })


    let mudaFonte = document.getElementById("tamanhoTexto")
    mudaFonte.addEventListener("change", function(){
        let paragrafo = document.getElementById("texto");
        paragrafo.style.fontSize = `${mudaFonte.value}px`;

    localStorage.setItem("mudaFonte",`${mudaFonte.value}px`)
    })

    let corFonte = document.getElementById('corLetra')
    corFonte.addEventListener("change", function(){
    document.getElementById("texto").style.color = corFonte.value

    localStorage.setItem("mudaCorDaLetra", corFonte.value)
    })

    
    let guardaCor = localStorage.getItem("mudaCorDeFundo")
    document.body.style.backgroundColor = guardaCor;

    let guardaFont = localStorage.getItem("mudaFonte")
    document.getElementById("texto").style.fontSize = guardaFont

    let guardaCorLetra = localStorage.getItem("mudaCorDaLetra")
    document.getElementById("texto").style.color = guardaCorLetra

    
      
}

