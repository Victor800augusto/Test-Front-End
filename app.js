const textFields = document.querySelectorAll(".mdc-text-field");
for (const textField of textFields) {
  mdc.textField.MDCTextField.attachTo(textField);
}

const button = document.querySelector(".mdc-button");
mdc.ripple.MDCRipple.attachTo(button);
