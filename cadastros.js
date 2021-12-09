const table = document.getElementById("tableCadastros");
const tableBody = document.getElementById("tableBody");

for (var i = 0; i < localStorage.length; i++) {
  const data = JSON.parse(localStorage.getItem(localStorage.key(i)));
  const row = tableBody.insertRow();

  row.classList.add("mdc-data-table__row");
  const cellNome = row.insertCell();
  cellNome.classList.add("mdc-data-table__cell");
  const cellCPF = row.insertCell();
  cellCPF.classList.add("mdc-data-table__cell");
  const cellTelefone = row.insertCell();
  cellTelefone.classList.add("mdc-data-table__cell");
  const cellEmail = row.insertCell();
  cellEmail.classList.add("mdc-data-table__cell");

  const cellDelete = row.insertCell();
  cellDelete.classList.add("mdc-data-table__cell");
  cellDelete.classList.add("deleteItem");

  cellNome.innerHTML = data.nome;
  cellCPF.innerHTML = data.cpf;
  cellTelefone.innerHTML = data.tel;
  cellEmail.innerHTML = data.email;

  const deleteHtml = `<span class="material-icons IconDelete" onclick="deletarItem()">delete</span>`;
  cellDelete.innerHTML = deleteHtml;
}

const deletarItem = () => {
  console.log(table.rows.length);
  console.log(this.parent);
};
