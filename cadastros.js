const table = document.getElementById("tableCadastros");
const tableBody = document.getElementById("tableBody");

let listData = JSON.parse(localStorage.getItem("localData"));

for (var i = 0; i < listData.length; i++) {
  const data = listData[i];

  const row = tableBody.insertRow();

  row.classList.add("mdc-data-table__row");
  const cellNome = row.insertCell();
  cellNome.classList.add("mdc-data-table__cell");
  cellNome.id = `nome${i}`;
  const cellCPF = row.insertCell();
  cellCPF.classList.add("mdc-data-table__cell");
  cellCPF.id = `cpf${i}`;
  const cellTelefone = row.insertCell();
  cellTelefone.classList.add("mdc-data-table__cell");
  cellTelefone.id = `tel${i}`;
  const cellEmail = row.insertCell();
  cellEmail.classList.add("mdc-data-table__cell");
  cellEmail.id = `email${i}`;
  const cellDeleteEdit = row.insertCell();
  cellDeleteEdit.classList.add("mdc-data-table__cell");
  cellDeleteEdit.classList.add("deleteItem");

  cellNome.innerHTML = data.name;
  cellCPF.innerHTML = data.cpf;
  cellTelefone.innerHTML = data.phone;
  cellEmail.innerHTML = data.email;

  const deleteEditHtml = `<span class="material-icons IconDelete" id="deleteId${i}" onclick="deletarItem(${i})">delete</span>
  <span class="material-icons IconEdit" id="editId${i}" onclick="editarItem(${i})">mode_edit</span>`;
  cellDeleteEdit.innerHTML = deleteEditHtml;
}

const deletarItem = (id) => {
  let isExecuted = confirm("Deseja deletar este item?");
  if (isExecuted) {
    listData.splice(id, 1);
    localStorage.setItem("localData", JSON.stringify(listData));
    document.location.reload(true);
  } else {
    console.log("false");
  }
};

const editarItem = (id) => {
  const editIcon = document.getElementById(`editId${id}`);
  let nome = document.getElementById(`nome${id}`);
  let cpf = document.getElementById(`cpf${id}`);
  let tel = document.getElementById(`tel${id}`);
  let email = document.getElementById(`email${id}`);

  if (editIcon.innerHTML == "mode_edit") {
    nome.innerHTML = `<input type="text" class="inputEdit" value="${nome.innerHTML}"></input>`;
    nome.firstChild.addEventListener("keypress", verificarInputNome);
    nome.firstChild.addEventListener("focusout", limparEspacos);
    cpf.innerHTML = `<input type="text" class="inputEdit" maxlength="11" value="${cpf.innerHTML}"></input>`;
    cpf.firstChild.addEventListener("keypress", verificarInputNumero);
    tel.innerHTML = `<input type="tel" class="inputEdit" maxlength="12" value="${tel.innerHTML}"></input>`;
    tel.firstChild.addEventListener("keypress", verificarInputNumero);
    email.innerHTML = `<input type="email" class="inputEdit" value="${email.innerHTML}"></input>`;
    email.firstChild.addEventListener("keypress", verificarInputEmail);
    editIcon.innerHTML = "save_as";
  } else {
    if (nome.firstChild.value != "") {
      nome.innerHTML = nome.firstChild.value;
      listData[id].name = nome.innerHTML;
    } else {
      nome.innerHTML = listData[id].name;
    }
    if (cpf.firstChild.value != "") {
      cpf.innerHTML = cpf.firstChild.value;
      listData[id].cpf = cpf.innerHTML;
    } else {
      cpf.innerHTML = listData[id].cpf;
    }
    if (tel.firstChild.value != "") {
      tel.innerHTML = tel.firstChild.value;
      listData[id].phone = tel.innerHTML;
    } else {
      tel.innerHTML = listData[id].phone;
    }
    if (email.firstChild.value != "") {
      email.innerHTML = email.firstChild.value;
      listData[id].email = email.innerHTML;
    } else {
      email.innerHTML = listData[id].email;
    }

    localStorage.setItem("localData", JSON.stringify(listData));

    editIcon.innerHTML = "mode_edit";
  }
};

function verificarInputNome(e) {
  const format = /[A-z ]/g;
  if (!format.test(e.key)) {
    e.preventDefault();
  }
  if (e.path[0].value.trim() == "" && e.key == " ") {
    e.preventDefault();
  }
}

function limparEspacos(e) {
  if (e.path[0].value.trim() == "") {
    e.path[0].value = "";
  } else {
    e.path[0].value = e.path[0].value.trim();
  }
}

function verificarInputNumero(e) {
  const format = /[0-9]/g;
  if (!format.test(e.key)) {
    e.preventDefault();
  }
}

function verificarInputEmail(e) {
  const format = /[0-9A-z_.@]/g;
  if (!format.test(e.key)) {
    e.preventDefault();
  }
}
