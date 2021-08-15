import Popup from "./Popup.js";

export default class PopupDeleteCard extends Popup {
  constructor({ modalSelector, handleFormSubmit }) {
    super(modalSelector);

    this._modalForm = this._modalElement.querySelector(".modal__form");
    this._handleFormSubmit = handleFormSubmit;
    this._button = this._modalElement.querySelector(".modal__save-button");
  }

  open(evt, cardId) {
    super.open();
    this._cardId = cardId;
    this._card = evt.target.parentElement;
  }

  setEventListeners() {
    this._modalForm.addEventListener("submit", (e) => {
      e.preventDefault();
      this._handleFormSubmit(this._card, this._cardId);
    });

    super.setEventListeners();
  }
}
