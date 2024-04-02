const botoesAdicionarPizza = document.querySelectorAll(".card__button-add");
const botaoFecharJanela = document.querySelector(".botao-vermelho")
const valorQuantPizza = document.getElementById(".modal__texto-quant");
console.log(valorQuantPizza);
const aumentarQuantPizza = document.querySelector(".add-pizza");
console.log(botoesAdicionarPizza);
const modal = document.querySelector(".bkg-modal"); 


for (let i = 0; i < botoesAdicionarPizza.length; i++) {
    botoesAdicionarPizza[i].addEventListener('click', () => {
        console.log("Clicaram no botão");
        modal.classList.add("bkg-modal--ativo");
    })
}

botaoFecharJanela.addEventListener('click', () => {
    modal.classList.remove("bkg-modal--ativo");
})

aumentarQuantPizza.addEventListener('click', () => {
    valorQuantPizza.innerHTML++;
})

