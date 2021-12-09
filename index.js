const btnCadastro = document.getElementById("btnCadastro");
const form = document.getElementById("form");
const inputName = document.getElementById("inputNameForm");
const inputCPF = document.getElementById("inputCPFForm");
const inputTelefone = document.getElementById("inputTelForm");
const inputEmail = document.getElementById("inputEmailForm");

const cadastro = (e) => {
  e.preventDefault();

  localStorage.setItem(
    localStorage.length + 1,
    JSON.stringify({
      nome: form.elements[0].value,
      cpf: form.elements[1].value,
      tel: form.elements[2].value,
      email: form.elements[3].value,
    })
  );
  form.reset();
};

form.addEventListener("submit", cadastro, true);

inputName.addEventListener("keypress", verificarInputNome);

function verificarInputNome(e) {
  const format = /[A-z ]/g;
  if (!format.test(e.key)) {
    e.preventDefault();
  }
}

inputCPF.addEventListener("keypress", verificarInputCPF);
inputTelefone.addEventListener("keypress", verificarInputCPF);

function verificarInputCPF(e) {
  const format = /[0-9]/g;
  if (!format.test(e.key)) {
    e.preventDefault();
  }
}

inputEmail.addEventListener("keypress", verificarInputEmail);

function verificarInputEmail(e) {
  const format = /[0-9A-z_.@]/g;
  if (!format.test(e.key)) {
    e.preventDefault();
  }
}
