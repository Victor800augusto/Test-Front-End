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
    nome.innerHTML = `<input type="text" value="${nome.innerHTML}"></input>`;
    cpf.innerHTML = `<input type="text" value="${cpf.innerHTML}"></input>`;
    tel.innerHTML = `<input type="tel" value="${tel.innerHTML}"></input>`;
    email.innerHTML = `<input type="email" value="${email.innerHTML}"></input>`;
    editIcon.innerHTML = "save_as";
  } else {
    nome.innerHTML = nome.firstChild.value;
    cpf.innerHTML = cpf.firstChild.value;
    tel.innerHTML = tel.firstChild.value;
    email.innerHTML = email.firstChild.value;

    listData[id].name = nome.innerHTML;
    listData[id].cpf = cpf.innerHTML;
    listData[id].email = email.innerHTML;
    listData[id].phone = tel.innerHTML;

    localStorage.setItem("localData", JSON.stringify(listData));

    editIcon.innerHTML = "mode_edit";
  }
};
