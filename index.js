const btnCadastro = document.getElementById("btnCadastro");

const form = document.getElementById("form");

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
