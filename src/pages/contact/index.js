const nomeDoAdotante = document.getElementById("nomedoadotante");
const whatsApp = document.getElementById("whatsApp");
const assunto = document.getElementById("assunto");
const mensagem = document.getElementById("mensagem");

const formulario = document.querySelector('#form')
formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
});

function limpaInput(input) {
  nomedoadotante.value = "";
  whatsApp.value = "";
  assunto.value = "";
  mensagem.value = "";
}

const send = document.getElementById("send");
send.addEventListener("click", (event) => {
  limpaInput();
});
