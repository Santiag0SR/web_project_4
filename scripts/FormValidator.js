class FormValidator {
  constructor(settings, formElement) {
    this._settings = settings;
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;

    this._formEl = formElement;
  }

  _isValid(inputs) {
    return inputs.every((input) => input.validity.valid);
  }

  _toggleButton(inputs) {
    const buttonEl = this._formEl.querySelector(this._submitButtonSelector);
    if (this._isValid(inputs)) {
      buttonEl.disabled = false;
      buttonEl.classList.remove(this._inactiveButtonClass);
    } else {
      buttonEl.disabled = true;
      buttonEl.classList.add(this._inactiveButtonClass);
    }
  }

  _showInputError(input) {
    const errorSpan = this._formEl.querySelector("#" + input.id + "-error");
    // add error message/class
    errorSpan.textContent = input.validationMessage;
    errorSpan.classList.add(this._errorClass);
    input.classList.add(this._inputErrorClass);
  }

  _hideInputError(input) {
    const errorSpan = this._formEl.querySelector("#" + input.id + "-error");
    // add error message/class
    errorSpan.textContent = "";
    errorSpan.classList.remove(this._errorClass);
    input.classList.remove(this._inputErrorClass);
  }

  _checkInputValidity(input) {
    if (input.validity.valid) {
      this._hideInputError(this._formEl, input, this._settings);
    } else {
      this._showInputError(this._formEl, input, this._settings);
    }
  }

  _starToggleButton(inputs) {
    const buttonEditProfile = document.querySelector(
      ".modal__save-button_type_edit"
    );
    if (this._formEl.contains(buttonEditProfile)) {
      buttonEditProfile.disabled = false;
      buttonEditProfile.classList.remove(this._inactiveButtonClass);
    } else {
      this._toggleButton(this._formEl, this._settings, inputs);
    }
  }

  _setEventListeners() {
    const inputs = Array.from(
      this._formEl.querySelectorAll(this._inputSelector)
    );
    this._starToggleButton(this._formEl, inputs, this._settings);
    inputs.forEach((input) => {
      input.addEventListener("input", () => {
        // check validity
        this._checkInputValidity(this._formEl, input, this._settings);
        //toggle button
        this._toggleButton(this._formEl, this._settings, inputs);
      });
    });
  }

  enableValidation() {
    this._formEl.addEventListener("submit", (event) => event.preventDefault());
    this._setEventListeners(this._formEl, this._settings);
  }
}

export default FormValidator;
