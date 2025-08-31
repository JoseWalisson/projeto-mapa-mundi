const imgAtual = document.querySelector(".img-atual");

const botoes = document.querySelectorAll("#buttons a");

botoes.forEach(botao => {
    botao.addEventListener("click", function (event) {
        event.preventDefault();
        const novaImg = this.getAttribute("href");
        imgAtual.setAttribute("src", novaImg);
    });
});
