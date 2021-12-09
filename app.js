const textFields = document.querySelectorAll(".mdc-text-field");
for (const textField of textFields) {
  mdc.textField.MDCTextField.attachTo(textField);
}

const button = document.querySelector(".mdc-button");
mdc.ripple.MDCRipple.attachTo(button);

// localStorage.setItem(
//   "459",
//   JSON.stringify({ nome: "victor", email: "victor@gmail.com", tel: "999" })
// );

// console.log(localStorage.getItem("459"));
