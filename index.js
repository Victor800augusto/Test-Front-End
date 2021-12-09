const btnCadastro = document.getElementById("btnCadastro");
const form = document.getElementById("form");
const inputName = document.getElementById("inputNameForm");
const inputCPF = document.getElementById("inputCPFForm");
const inputTelefone = document.getElementById("inputTelForm");
const inputEmail = document.getElementById("inputEmailForm");

let listCadastros = [];

const init = () => {
  getData();
  if (listCadastros.length == 0) {
    listCadastros = [
      {
        cpf: "04080757247",
        name: "José Andrade",
        email: "jose@test.com.br",
        phone: "11987654321",
      },
      {
        cpf: "77797584192",
        name: "Manoel Silva",
        email: "manoel@test.com.br",
        phone: "11987654321",
      },
      {
        cpf: "45486737688",
        name: "Augusto Maier",
        email: "augusto@test.com.br",
        phone: "11987654321",
      },
    ];
    localStorage.setItem("localData", JSON.stringify(listCadastros));
  }
};

const addData = () => {
  getData();
  listCadastros.push({
    cpf: form.elements[1].value,
    name: form.elements[0].value,
    email: form.elements[3].value,
    phone: form.elements[2].value,
  });
  localStorage.setItem("localData", JSON.stringify(listCadastros));
};

function getData() {
  const str = localStorage.getItem("localData");
  if (str != null) {
    listCadastros = JSON.parse(str);
  }
}

const cadastro = (e) => {
  e.preventDefault();
  addData();
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

window.addEventListener("load", init());
