const botoesAdicionarPizza = document.querySelectorAll(".card__button-add");
const botaoFecharJanela = document.querySelector(".botao-vermelho")
const aumentarQuantPizza = document.querySelector(".add-pizza");
const diminuirQuantPizza = document.querySelector(".remove-pizza");
console.log(botoesAdicionarPizza);
const modal = document.querySelector(".bkg-modal");
let quant = parseFloat(document.getElementById('modal__texto-quant').innerHTML);
const botaoAdicionarAoCarrinho = document.querySelector('.modal__botao-adicionar');
const tamanhosSelecionado = document.querySelectorAll(".modal__tamanho-area")



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
    quant = quant + 1;
    document.getElementById('modal__texto-quant').innerHTML = quant;
})


diminuirQuantPizza.addEventListener('click', () => {
    if (quant > 1) {
        quant = quant - 1;
        document.getElementById('modal__texto-quant').innerHTML = quant;
    }
})

// tamanhoSelecionadoP.addEventListener('click',()=>{
//     tamanhoSelecionadoP.classList.add("modal__tamanho-area--ativo");
// })







