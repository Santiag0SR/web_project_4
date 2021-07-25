import Popup from "./Popup.js";

export default class PopupWithForms extends Popup {
  constructor({ modalSelector, handleFormSubmit }) {
    super(modalSelector);

    this._modalForm = this._modalElement.querySelector(".modal__form");
    this._handleFormSubmit = handleFormSubmit;
  }

  _getInputValues() {
    // this._addCardTitleInput = this._modalForm.querySelector(
    //   ".modal__form-item_type_title"
    // );
    // this._addCardImageLinkInput = document.querySelector(
    //   ".modal__form-item_type_image-link"
    // );

    // this._newCard = {
    //   name: this._addCardTitleInput.value,
    //   link: this._addCardImageLinkInput.value,
    // };

    // return this._newCard;

    this._inputs = this._modalForm.querySelectorAll(".modal__form-item");

    this._input1 = this._inputs.item(0);
    this._input2 = this._inputs.item(1);

    this._formValues = {
      name: this._input1.value,
      link: this._input2.value,
    };

    return this._formValues;
  }

  setEventListeners() {
    this._modalForm.addEventListener("submit", () => {
      this._handleFormSubmit(this._getInputValues());
      this.close();
    });

    super.setEventListeners();
  }

  close() {
    this._modalForm.reset();

    super.close();
  }
}
