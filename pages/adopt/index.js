const cidade = document.getElementById("cidade");
const logradouro = document.getElementById("logradouro");
const estado = document.getElementById("estado");
const bairro = document.getElementById("bairro");
const cep = document.getElementById("cep");

const nome = document.getElementById('nome');
const telefone = document.getElementById('telefone');
const email = document.getElementById('email');



const mensagemErro = document.getElementById("erro");

$("#telefone").mask("00 00000-0000", { reverse: true });
$("#cep").mask("00000-000", { reverse: true });

async function buscaEndereco(cep) {
  try {
    const consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

    const consultaCEPConvertida = await consultaCEP.json();

    if (consultaCEPConvertida.erro) {
      throw Error("CEP não existente!");
    }

    return consultaCEPConvertida;
  } catch (erro) {
    return { erro: erro };
  }
}

function limpaInformacoesCep(input) {
  cidade.value = "";
  logradouro.value = "";
  estado.value = "";
  bairro.value = "";
}

function limpaInput(input) {
  nome.value = "";
  email.value = "";
  telefone.value = "";
}

cep.addEventListener("input", async (event) => {
  mensagemErro.innerHTML = "";

  limpaInput();

  if (event.target.value.length == 9) {
    const unmaskedValue = event.target.value.replace("-", "");

    const endereco = await buscaEndereco(unmaskedValue);

    if (endereco.erro) {
      return (mensagemErro.innerHTML =
        '<p style="color: red; padding: 1rem 0;">CEP Inválido. Tente novamente!</p>');
    }

    cidade.value = endereco.localidade;
    logradouro.value = endereco.logradouro;
    estado.value = endereco.uf;
    bairro.value = endereco.bairro;

    mensagemErro.innerHTML = "";
  }
});

const form = document.getElementById("form");
form.addEventListener("submit", (evento) => {
  evento.preventDefault();
});

const send = document.getElementById("send");
send.addEventListener("click", (event) => {
  limpaInformacoesCep();
  limpaInput();
});
