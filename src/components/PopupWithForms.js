import Popup from "./Popup.js";

export default class PopupWithForms extends Popup {
  constructor({ modalSelector, handleFormSubmit }) {
    super(modalSelector);

    this._modalForm = this._modalElement.querySelector(".modal__form");
    this._handleFormSubmit = handleFormSubmit;
    this._button = this._modalElement.querySelector(".modal__save-button");
  }

  _getInputValues() {
    this._inputs = Array.from(
      this._modalForm.querySelectorAll(".modal__form-item")
    );

    this._formValues = {};

    this._inputs.forEach((input) => {
      this._formValues[input.name] = input.value;
    });

    return this._formValues;
  }

  setEventListeners() {
    this._modalForm.addEventListener("submit", (e) => {
      e.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });

    super.setEventListeners();
  }

  close() {
    this._modalForm.reset();

    super.close();
  }
}
