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