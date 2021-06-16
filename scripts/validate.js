const isValid = (inputs) => {
  return inputs.every((input) => input.validity.valid);
};

const toggleButton = (formEl, settings, inputs) => {
  const buttonEl = formEl.querySelector(settings.submitButtonSelector);
  if (isValid(inputs)) {
    buttonEl.disabled = false;
    buttonEl.classList.remove(settings.inactiveButtonClass);
  } else {
    buttonEl.disabled = true;
    buttonEl.classList.add(settings.inactiveButtonClass);
  }
};

const showInputError = (formEl, input, { errorClass }) => {
  const errorSpan = formEl.querySelector("#" + input.id + "-error");
  // add error message/class
  errorSpan.textContent = input.validationMessage;
  errorSpan.classList.add(errorClass);
};

const hideInputError = (formEl, input, { errorClass }) => {
  const errorSpan = formEl.querySelector("#" + input.id + "-error");
  // add error message/class
  errorSpan.textContent = "";
  errorSpan.classList.remove(errorClass);
};

const checkInputValidity = (formEl, input, settings) => {
  if (input.validity.valid) {
    hideInputError(formEl, input, settings);
  } else {
    showInputError(formEl, input, settings);
  }
};

const setEventListeners = (formEl, settings) => {
  const inputs = Array.from(formEl.querySelectorAll(settings.inputSelector));
  //emptyForm(inputs);
  inputs.forEach((input) => {
    input.addEventListener("input", (event) => {
      // check validity
      checkInputValidity(formEl, input, settings);
      //toggle button
    });
  });
};

//const emptyForm = (inputs) => {
//if (inputs.textContent === "") {
//  toggleButton(formEl, settings, inputs);
// }
//};

const enableValidation = (settings) => {
  const formElements = Array.from(
    document.querySelectorAll(settings.formSelector)
  );
  formElements.forEach((formEl) => {
    formEl.addEventListener("submit", (event) => event.preventDefault());
    setEventListeners(formEl, settings);
  });
};

enableValidation({
  formSelector: ".modal__form",
  inputSelector: ".modal__form-item",
  submitButtonSelector: ".modal__save-button",
  inactiveButtonClass: "modal__save-button_disabled",
  inputErrorClass: "modal__form-item_type_error",
  errorClass: "modal__error_visible",
});
