const perguntas = document.querySelectorAll('.question')

perguntas.forEach((pergunta) => {
    
    pergunta.addEventListener('click', () => {
        pergunta.classList.toggle('active')

        const resposta = pergunta.nextElementSibling;
        resposta.classList.toggle('active')
        if(resposta.style.display === 'flex'){
            resposta.style.display = 'none'
        }

        else{
            resposta.style.display = 'flex'
        }
    })
});



var barras = document.querySelector(".tres-barras")
barras.addEventListener("click", () => barras.classList.toggle("aberto"))

var barra1 = document.querySelector(".prim-barra")
barras.addEventListener("click", () => barra1.classList.toggle("aberto"))

var barra2 = document.querySelector(".seg-barra")
barras.addEventListener("click", () => barra2.classList.toggle("aberto"))

var barra3 = document.querySelector(".ter-barra")
barras.addEventListener("click", () => barra3.classList.toggle("aberto"))

var header= document.querySelector("header")
barras.addEventListener("click", () => header.classList.toggle("aberto"))

var abas = document.querySelector(".abas")
barras.addEventListener("click", () => abas.classList.toggle("aberto"))

var logo  = document.querySelector(".tittle")
barras.addEventListener("click", () => logo.classList.toggle("aberto"))

var logopreto  = document.querySelector(".logopreto")
barras.addEventListener("click", () => logopreto.classList.toggle("aberto"))