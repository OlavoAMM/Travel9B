const card = document.querySelector('.card')
const lerMais = document.querySelector('.lerMais')
const letraCard = document.querySelector('.explicação1')
const Cardletra = document.querySelector('.explicação2')
const lerMenos = document.querySelector('.lerMenos')
const tittleCard = document.querySelector('.tittle-card')

lerMais.addEventListener('click', () => {
    lerMais.classList.toggle('active')
    card.classList.toggle("active")
    Cardletra.classList.toggle('active')
    letraCard.classList.toggle('active')
    lerMenos.classList.toggle('active')
    tittleCard.classList.toggle('active')


})


lerMenos.addEventListener('click', () => {
    lerMais.classList.remove('active')
    card.classList.remove("active")
    Cardletra.classList.remove('active')
    letraCard.classList.remove('active')
    lerMenos.classList.remove('active')
    tittleCard.classList.remove('active')
})

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