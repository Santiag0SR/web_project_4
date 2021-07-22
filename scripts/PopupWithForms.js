import Popup from "./Popup.js";

export default class PopupWithForms extends Popup {
  constructor({ modalSelector, handleFormSubmit }) {
    super(modalSelector);

    this._modalForm = this._modalElement.querySelector(".modal__form");
    this._handleFormSubmit = handleFormSubmit;
  }

  _getInputValues() {
    const addCardTitleInput = this._modalForm.querySelector(
      ".modal__form-item_type_title"
    );
    const addCardImageLinkInput = document.querySelector(
      ".modal__form-item_type_image-link"
    );

    this._newCard = {
      name: addCardTitleInput.value,
      link: addCardImageLinkInput.value,
    };

    return this._newCard;
  }

  setEventListeners() {
    this._getInputValues();

    this._modalForm.addEventListener("submit", () => {
      console.log(this._newCard);
    });

    const addCardButtonEl = document.querySelector(".profile__add-button");
    addCardButtonEl.addEventListener("click", () => {
      super.open();
    });

    super._setEventListeners();
  }

  close() {
    this._modalForm.reset();

    super.close();
  }
}
