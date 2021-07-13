class FormValidator {
  constructor(settings, formElement) {
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;

    this._formEl = formElement;
  }

  _showInputError = (formEl, input) => {
    const errorSpan = formEl.querySelector("#" + input.id + "-error");
    // add error message/class
    errorSpan.textContent = input.validationMessage;
    errorSpan.classList.add(this._errorClass);
    input.classList.add(this._inputErrorClass);
  };

  _hideInputError = (formEl, input) => {
    const errorSpan = formEl.querySelector("#" + input.id + "-error");
    // add error message/class
    errorSpan.textContent = "";
    errorSpan.classList.remove(this._errorClass);
    input.classList.remove(this._inputErrorClass);
  };

  _checkInputValidity = (formEl, input) => {
    if (input.validity.valid) {
      this._hideInputError(formEl, input);
    } else {
      this._showInputError(formEl, input);
    }
  };

  _starToggleButton(formEl, inputs) {
    const buttonEditProfile = document.querySelector(
      ".modal__save-button_type_edit"
    );
    if (formEl.contains(buttonEditProfile)) {
      buttonEditProfile.disabled = false;
      buttonEditProfile.classList.remove(this._inactiveButtonClass);
    } else {
      this._toggleButton(formEl, inputs);
    }
  }

  _isValid = (inputs) => {
    return inputs.every((input) => input.validity.valid);
  };

  _toggleButton = (formEl, inputs) => {
    const buttonEl = formEl.querySelector(this._submitButtonSelector);
    if (this._isValid(inputs)) {
      buttonEl.disabled = false;
      buttonEl.classList.remove(this._inactiveButtonClass);
    } else {
      buttonEl.disabled = true;
      buttonEl.classList.add(this._inactiveButtonClass);
    }
  };

  _setEventListeners(formEl) {
    const inputs = Array.from(formEl.querySelectorAll(this._inputSelector));
    this._starToggleButton(formEl, this._inputs);
    inputs.forEach((input) => {
      input.addEventListener("input", () => {
        // check validity
        this._checkInputValidity(formEl, input);
        //toggle button
        this._toggleButton(formEl);
      });
    });
  }

  enableValidation() {
    this._formEl.addEventListener("submit", (event) => event.preventDefault());
    this._setEventListeners(this._formEl);
  }
}

export default FormValidator;
