class FormValidator {
  constructor(settings, formElement) {
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
    if (_isValid(inputs)) {
      buttonEl.disabled = false;
      buttonEl.classList.remove(settings.inactiveButtonClass);
    } else {
      buttonEl.disabled = true;
      buttonEl.classList.add(settings.inactiveButtonClass);
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
      _hideInputError(this._formEl, input, settings);
    } else {
      _showInputError(this._formEl, input, settings);
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
      _toggleButton(this._formEl, settings, inputs);
    }
  }

  _setEventListeners() {
    const inputs = Array.from(
      this._formEl.querySelectorAll(this._inputSelector)
    );
    _starToggleButton(this._formEl, inputs, settings);
    inputs.forEach((input) => {
      input.addEventListener("input", () => {
        // check validity
        _checkInputValidity(this._formEl, input, settings);
        //toggle button
        _toggleButton(this._formEl, settings, inputs);
      });
    });
  }

  enableValidation() {
    this._formEl.addEventListener("submit", (event) => event.preventDefault());
    _setEventListeners(this._formEl, settings);
  }
}

export default FormValidator;
