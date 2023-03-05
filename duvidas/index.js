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